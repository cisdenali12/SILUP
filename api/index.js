require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('./db');
const app = express();
const port = process.env.PORT || 3000;

let db;

// Setup middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(bodyParser.json());

const authenticate = (req, res, next) => {
  // Checking the "Bearer token" authorization header
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.userId;
    next();
  } catch (err) {
    res.status(403).send('Invalid token');
  }
};

connect().then(api => {
  db = api;

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const valid = await db.isValidUser({ email, password });
    if (!valid) {
      res.status(401).send('Invalid user or password');
    } else {
      const user = await db.getUser(email);
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).send({ user, token });
    }
  });

  app.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
    const exists = await db.existsUser(email);
    if (exists) {
      res.status(401).send('Email already in use');
    } else {
      await db.registerUser({ email, password, name });
      const user = await db.getUser(email);
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(201).send({ user, token });
    }
  });

  app.post('/category/items', authenticate, async (req, res) => {
    const { category, userId } = req.body;
    const items = await db.getCategoryItems({ category, userId });
    res.status(200).send({ category, items });
  });

  app.post('/category/amounts-by-unit', authenticate, async (req, res) => {
    const { category, userId } = req.body;
    const amountsByUnit = await db.getCategoryAmountsByUnit({ category, userId });
    res.status(200).send({ category, amountsByUnit });
  });

  app.post('/category/item', authenticate, async (req, res) => {
    const { category, userId, item } = req.body;
    const resultItem = await db.createCategoryItem({ userId, category, item });
    res.status(201).send({ category, item: resultItem });
  });

  app.delete('/category/item', authenticate, async (req, res) => {
    const { category, userId, itemId } = req.body;
    await db.deleteCategoryItem({ category, userId, itemId });
    res.status(200).send({ category, itemId });
  });

  app.post('/category/item/transaction', authenticate, async (req, res) => {
    const { category, userId, itemId, amount, type } = req.body;
    const [resultItem, resultTransaction] = await db.createCategoryItemTransaction({ category, userId, itemId, amount, type });
    res.status(201).send({ category, item: resultItem, transaction: resultTransaction });
  });

  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
});
