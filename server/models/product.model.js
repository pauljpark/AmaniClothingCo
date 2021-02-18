const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
    price: {type: Number, required: true},
    qty: {type: Number, required: true},
    //date: {type: Date, required: true},
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product