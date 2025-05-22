const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

let db;

const connect = async () => {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  db = client.db();
  console.log('✅ MongoDB connected');
  return dbAPI;
};

const dbAPI = {
  async isValidUser({ email, password }) {
    const cred = await db.collection('users').findOne({ email });
    if (!cred || !(await bcrypt.compare(password, cred.password))) {
      return false // invalid user
    }
    return true;
  },

  async existsUser(email) {
    const found = await db.collection('users').findOne({ email }, { projection: { _id: 1 } });
    return !!found;
  },

  async registerUser({ email, password, name }) {
    const id = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    const categories = ['fridge', 'groceries', 'produce', 'freezer'].reduce((acc, key) => {
      acc[key] = { items: [], amountsByUnit: [] };
      return acc;
    }, {});
    await db.collection('users').insertOne({ _id: id, email, password:hashedPassword, name, categories });
  },

  async getUser(email) {
    const user = await db.collection('users').findOne({ email });
    return { id: user._id, name: user.name, email: user.email };
  },

  async getCategoryItems({ userId, category }) {
    const user = await db.collection('users').findOne({ _id: userId });
    return user.categories[category]?.items || [];
  },

  async getCategoryAmountsByUnit({ userId, category }) {
    const user = await db.collection('users').findOne({ _id: userId });
    return user.categories[category]?.amountsByUnit || [];
  },

  async createCategoryItem({ userId, category, item }) {
    const user = await db.collection('users').findOne({ _id: userId });
    const newItem = { ...item, id: uuidv4(), transactions: [] };
    const unitEntry = user.categories[category].amountsByUnit.find(u => u.unit === item.unit);
    if (unitEntry) {
      unitEntry.value += item.amount;
    } else {
      user.categories[category].amountsByUnit.push({ unit: item.unit, value: item.amount });
    }
    user.categories[category].items.push(newItem);
    await db.collection('users').updateOne({ _id: userId }, { $set: { categories: user.categories } });
    return newItem;
  },

  async deleteCategoryItem({ userId, category, itemId }) {
    const user = await db.collection('users').findOne({ _id: userId });
    const items = user.categories[category].items;
    const index = items.findIndex(i => i.id === itemId);
    if (index >= 0) {
      const item = items[index];
      const unitEntry = user.categories[category].amountsByUnit.find(u => u.unit === item.unit);
      if (unitEntry) unitEntry.value -= item.amount;
      items.splice(index, 1);
      await db.collection('users').updateOne({ _id: userId }, { $set: { categories: user.categories } });
    }
  },

  async createCategoryItemTransaction({ userId, category, itemId, amount, type }) {
    const user = await db.collection('users').findOne({ _id: userId });
    const item = user.categories[category].items.find(i => i.id === itemId);
    if (!item) return;

    item.amount += type === 'add' ? amount : -amount;
    const unitEntry = user.categories[category].amountsByUnit.find(u => u.unit === item.unit);
    if (unitEntry) unitEntry.value += type === 'add' ? amount : -amount;
    console.log('unitEntry', unitEntry)
    const transaction = {
      type,
      amount,
      resultAfter: item.amount,
      timestamp: new Date()
    };
    item.transactions.push(transaction);
    await db.collection('users').updateOne({ _id: userId }, { $set: { categories: user.categories } });
    console.log('transaction',transaction)
    return [item, transaction];
  }
};

module.exports = { connect };
