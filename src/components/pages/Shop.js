import React from 'react'
import axios from 'axios'
import Nav from '../Nav'

class ProductList extends React.Component{
    constructor() {
        super()
        this.state = {
            products: [],
            cart: []
        }
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount() {
        axios.all([
            axios.get('http://localhost:5000/products/')
            .then(response  => {
                this.setState({products: response.data})
            })
            .catch((error) => {
                console.log(error)
            }),

            axios.get('http://localhost:5000/cart/')
            .then(response  => {
                this.setState({cart: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
        ])
    }

    addToCart(e) {
        //filter out cart and see which ones equal e.name
        const product = this.state.cart.filter(obj => (obj.name === e.name))
        console.log(product)
        //if theres no cart item with the e.name, it will return a blank array
        //if thats the case, add the product to cart
        if (product[0] === undefined) {
            axios.post('http://localhost:5000/cart/add', e)
            .then(res => console.log(res.data))
        }
        //get cart items and rerender new state with the product that was added to the cart
        axios.get('http://localhost:5000/cart/')
        .then(response  => {
            this.setState({cart: response.data})
        })
    }
    

    render() {
        return (
            <div>
                <Nav />
            <div>
                <h1>Products</h1>
                  <hr />
                    <div className='products'>
                        {this.state.products.map(currentProduct => {
                            return (
                                <div className='product' key={currentProduct._id}>
                                    <h3>{currentProduct.name}</h3>
                                    <p>{currentProduct.description}</p>
                                    <p>${currentProduct.price}</p>
                                    <button onClick={() => {this.addToCart(currentProduct)}}>Add To Cart</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList