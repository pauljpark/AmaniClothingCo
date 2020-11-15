const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const stripe = require('stripe')('sk_test_51Hbvc1F6oI7ilvLjRnfXZhiBo2umHT23IwSE9hXhXDSDnTDx4ePhv8AwEJZvnlabV7uzVJUGdZnox0ghY0gUwT9J00n93YwtH1')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const uri = process.env.ATLAS_URI
mongoose.connect(
    uri, 
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
)
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

//Requiring route files and using them(middleware)
const ProductsRouter = require('./routes/products')
const CartRouter = require('./routes/cart')

app.use('/products', ProductsRouter)
app.use('/cart', CartRouter)

app.post('/create-checkout-session', async (req, res) => {

  const session = await stripe.checkout.sessions.create({
    allow_promotion_codes: 'true',
    billing_address_collection: 'auto',
    shipping_address_collection: 
      {
        allowed_countries: ["AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "US"]
      },
    payment_method_types: ['card'],
    line_items: req.body.map(ele => ([
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: ele.name,
            description: ele.description
          },
          unit_amount: ele.price,
        },
        quantity: ele.quantity,
      },
    ])),
    mode: 'payment',
    success_url: 'http://localhost:3000/success/',
    cancel_url: 'http://localhost:3000/cancel/',
  });

  res.json({ id: session.id });
});



//listen
app.listen(port, () => {
    console.log('Server is running on port', port)
})