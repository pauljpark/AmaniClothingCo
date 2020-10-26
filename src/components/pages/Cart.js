import React from 'react'
import axios from 'axios'
import CartItem from './CartItem'
import { loadStripe } from "@stripe/stripe-js"

const promise = loadStripe("pk_test_51Hbvc1F6oI7ilvLjk9gEUmRvdtoB4oofPQ49JXEWNOguZgU9qhYhnfSPaTR48uO8GR5zkislJlkBPYeBDHejCO6n00VJ2g2EZ8")

class Cart extends React.Component {
    constructor() {
        super() 
            this.state = {
                cart: [],
                product: {
                    name: "Order",
                    price: 5.00
                }
            }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/cart/')
        .then(response => {
            this.setState({cart: response.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    deleteCartItem(id) {
        axios.delete('http://localhost:5000/cart/' + id)
            .then(res => console.log(res.data))

        this.setState({
            cart: this.state.cart.filter(el => el._id !== id)
        })
    }

    updateQty = (_id, newQty) => {
        const newItems = this.state.cart.map(item => {
            if (item._id === _id) {
                return {...item, qty: newQty}
            }
            return item
        })
        this.setState({
            cart: newItems
        })
    }

    grandTotal = () => 
        this.state.cart.reduce((total, item) => (
            total + item.qty * item.price
    ), 0).toFixed(2)

    handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await promise;
    
        // Call your backend to create the Checkout Session
        const response = await fetch('http://localhost:5000/create-checkout-session', { method: 'POST' });
    
        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session.id
        });

        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        }
    }


    render() {
        return (
            <div>
                {this.state.cart.map((cartItem, id) => (
                    <ul className='cart-items' key={id}>
                        <CartItem 
                            item={cartItem._id}
                            updateQty={this.updateQty} 
                            qty={cartItem.qty}
                            /* this is what passes all other metrics like name, descrip.etc
                            and you can use them in CartItem component */ 
                            {...cartItem} />
                        <button onClick={() => this.deleteCartItem(cartItem._id)}>Remove</button>
                    </ul>
                ))}
                    <h2>Grand Total: ${this.grandTotal()}</h2>
                    <button onClick={this.handleClick}>Checkout!</button>
            </div>
        )
    }
}

export default Cart