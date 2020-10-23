const router = require('express').Router()
let Cart = require('../models/cart.model')

router.route('/').get((req, res) => {
    //Mongoose method, 'find' method returns a promise
    //After it finds,
    Cart.find()
    //then get all exercises and return exercises in json format
    .then(cartItems => res.json(cartItems))
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

    const newCart = new Cart({
        name,
        description,
        price,
        qty,
        date
    })

    //saved to the MongoDB Atlas DB
    newCart.save()
    .then(() => res.json('Cart item added!'))
    .catch(err => res.status(400). json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    //find current cart item
    Cart.findById(req.params.id)
    //this grabbed the exercise from DB
    .then(item => {
        //assign new info to fields that already exists
        item.qty = req.body.qty

        item.save()
        .then(() => res.json('Cart item updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
})

router.route('/:id').delete((req, res) => {
    Cart.findByIdAndDelete(req.params.id)
    .then(() => res.json('Cart item deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router