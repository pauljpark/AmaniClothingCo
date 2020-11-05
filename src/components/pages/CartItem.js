import React from 'react'
import axios from 'axios'

class CartItem extends React.Component {

    handleAdd = () => {
        this.props.updateQty(this.props._id, this.props.qty + 1)

        const itemQty = {
            qty: this.props.qty + 1
        }

        console.log(itemQty)

        axios.post('http://localhost:5000/cart/update/'+ this.props.item, itemQty)
        .then(res => console.log(res.data))
    }

    handleSubtract = () => {

        this.props.updateQty(this.props._id, this.props.qty - 1)

        const itemQty = {
            qty: this.props.qty - 1
        }

        console.log(itemQty)

        axios.post('http://localhost:5000/cart/update/'+ this.props.item, itemQty)
        .then(res => console.log(res.data))
    }

    render() {
        return (
            <div className='CartItem'>
                <h3>{this.props.name}</h3>
                <p>${this.props.price}</p>
            <p>Quantity</p>
                <button 
                    className='cart-btns'
                    onClick={this.handleSubtract} 
                    disabled={this.props.qty <= 0}>
                    -
                </button>
            {this.props.qty}
                <button 
                    className='cart-btns'
                    onClick={this.handleAdd}>
                        +
                </button>
            </div>
        )
    }
}

export default CartItem