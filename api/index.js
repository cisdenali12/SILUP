require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT
const { connect } = require('./db')
const db = connect()
const cors = require('cors');


// Allow CORS from frontend
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// parse application/json
app.use(bodyParser.json())

app.post('/login', (req, res) => {
  console.log('login', req.body)
  const { email, password} = req.body
  console.log('login', email, password)
  const valid = db.isValidUser({ email, password})
  if(!valid){
    console.log('login failed')
    console.log('Expected', db.getCredentials(email))
    res.status(401)
    res.send('Invalid user or password')
  } else {
    const user = db.getUser(email)
    console.log('login Ok!')
    res.status(200)
    res.send(user)
  }
})

app.post('/register', (req, res) => {
  console.log('register', req.body)
  const {email, password, name} = req.body
  const valid = !db.existsUser(email)
  if(!valid){
    res.status(401)
    res.send('Email already in use')
  } else {
    db.registerUser({email, password, name})
    const user = db.getUser(email)
    res.status(201)
    res.send(user)
  }
})

app.post('/category/items', (req, res)=>{
  console.log('getItems', req.body)
  // TODO: userId from the credentials in the headers
  const {category, userId} = req.body
  const items = db.getCategoryItems({category, userId})
  const result = {category, items}
  console.log('result getItems', result)
  res.status(200)
  res.send(result)
})

app.post('/category/amounts-by-unit', async (req, res)=>{
  console.log('getAmountsByUnit', )
  // TODO: userId from the credentials in the headers
  const {category, userId} = req.body
  const amountsByUnit = db.getCategoryAmountsByUnit({category, userId})
  const result = {category, amountsByUnit}
  console.log('result getAmountsByUnit', result)
  res.status(200)
  res.send(result)
})

app.post('/category/item', (req, res)=>{
  console.log('createItem')
  // TODO: userId from the credentials in the headers
  const {category, userId, item} = req.body
  const resultItem = db.createCategoryItem({userId, category, item})
  const result = {category, item:resultItem}
  console.log('result createItem', result)
  res.status(201)
  res.send(result)
})

app.delete('/category/item', (req, res)=>{
  console.log('deleteItem')
  // TODO: userId from the credentials in the headers
  const {category, userId, itemId} = req.body
  db.deleteCategoryItem({category, userId, itemId})
  const result = {category, itemId}
  console.log('result deleteItem', result)
  res.status(200)
  res.send(result)
})

app.post('/category/item/transaction', (req, res)=>{
  console.log('createItemTransaction')
  console.log(req.body)
  // TODO: userId from the credentials in the headers
  const { category, userId, itemId, amount, type } = req.body
  const [resultItem, resultTransaction] = db.createCategoryItemTransaction({ category, userId, itemId, amount, type })
  const result = {category, item:resultItem}
  console.log('result createItemTransaction', result, resultTransaction)
  res.status(201)
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

