const router = require('express').Router()
let Product = require('../models/product.model')
const multer = require('multer')

///////storage for image upload ////////
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/img')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

//upload parameters for multer
const upload = multer({storage: storage})

// router.route('/single').post(upload.single('image'), (req, res) => {
//     console.log(req.file)
//     res.send('Image upload successful');
// });
////////////////////////////////////////

router.route('/').get((req, res) => {
    //Mongoose method, 'find' method returns a promise
    //After it finds,
    Product.find()
    //then get all products and return products in json format
    .then(products => res.json(products))
    //if error, return status 400 with error
    .catch(err => res.status(400).json('Error: ' + err))
})

//handles incoming http post requests
router.route('/add').post(upload.single('img'), (req, res) => {
    const name = req.body.name
    const description = req.body.description
    const img = '/img/' + req.file.filename
    const price = Number(req.body.price)
    const qty = Number(req.body.qty)
    //const date = Date.parse(req.body.date)

    const newProduct = new Product({
        name,
        description,
        img,
        price,
        qty,
        //date,
    })

    //saved to the MongoDB Atlas DB
    newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400). json('Error: ' + err))
})

// CRUD Routes
// finding the product by id
router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err))
})

// will delete the product by id
router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

//will update product
router.route('/update/:id').post(upload.single('img'), (req, res) => {
    console.log(req.file)
    //find current product from DB
    Product.findById(req.params.id)
    .then(product => {
        //assign new info to fields that already exists
        product.name = req.body.name
        product.description = req.body.description
        product.img = '/img/' + req.file.filename
        product.price = Number(req.body.price)

        product.save()
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
})

module.exports = router