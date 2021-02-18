import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = (props) => (
    <tr>
        <td>{props.product.name}</td>
        <td>{props.product.description}</td>
        <td><img src={props.product.img} alt='pic' style={{width: '100px'}}/></td>
        <td>{props.product.price}</td>
        <td>
            <Link to={'/edit/' + props.product._id}>edit</Link> | <a href='#' onClick={() => {props.delete(props.product._id)}}>delete</a>
        </td>
    </tr>
)

export default class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products')
        .then(resp => 
            this.setState({
                products: resp.data
            }))
        .catch(err => (console.log(err)))
    }

    deleteProduct = (id) => {
        axios.delete('http://localhost:5000/products/' + id)
        .then(resp => console.log(resp.data))

        this.setState({
            products: this.state.products.filter(item => item._id !== id)
        })
    }

    productList() {
        return this.state.products.map(product => {
            return <Product product={product} delete={this.deleteProduct} key={product._id} />
        })
    }

    render() {
        return (
            <div>
                <h3>All Products</h3>
                    <Link to='/add'>
                        <button>Add Product</button>
                    </Link>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.productList()}
                    </tbody>
                </table>
            </div>
        )
    }
}