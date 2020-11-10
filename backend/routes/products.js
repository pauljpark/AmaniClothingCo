const router = require('express').Router()
let Product = require('../models/product.model')

router.route('/').get((req, res) => {
    //Mongoose method, 'find' method returns a promise
    //After it finds,
    Product.find()
    //then get all exercises and return exercises in json format
    .then(products => res.json(products))
    //if error, return status 400 with error
    .catch(err => res.status(400).json('Error: ' + err))
})

//handles incoming http post requests
router.route('/add').post((req, res) => {
    const name = req.body.name
    const description = req.body.description
    const price = Number(req.body.price)
    const qty = Number(req.body.qty)
    const date = Date.parse(req.body.date)
    const img = req.body.img

    const newProduct = new Product({
        name,
        description,
        price,
        qty,
        date,
        img
    })

    //saved to the MongoDB Atlas DB
    newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400). json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router