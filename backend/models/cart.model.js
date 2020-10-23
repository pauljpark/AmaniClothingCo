const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cartSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    qty: {type: Number, required: true},
    date: {type: Date, required: true}
}, {
    timestamps: true
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart