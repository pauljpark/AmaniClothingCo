import React from 'react'
import axios from 'axios'

export default class Add extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            img: '',
            price: 0,
            qty: 0,
            addedText: ''
        }
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    onChangeImage = (e) => {
        this.setState({
            img: e.target.files[0]
        })
    }

    onChangePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    onChangeQty = (e) => {
        this.setState({
            qty: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        //handle file data from state before sending
        const data = new FormData()
        data.append('name', this.state.name)
        data.append('description', this.state.description)
        data.append('img', this.state.img)
        data.append('price', this.state.price)
        data.append('qty', this.state.qty)

        axios.post('http://localhost:5000/products/add/', data)
        .then(res => console.log(res.data))
        .then(this.setState({
            addedText: 'Product added!'
        }))

        //window.location = '/'
    }

    goBack = () => {
        window.location = '/admin'
    }

    render() {
        return (
            <div>
                <h3>Add Product Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name: </label>
                        <input 
                            required
                            value={this.state.name}
                            onChange={this.onChangeName}
                            type='text'
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <input 
                            required
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            type='text'
                        />
                    </div>
                    <div>
                        <label>Image: </label>
                        <input 
                            required
                            //value={this.state.img}
                            onChange={this.onChangeImage}
                            type='file'
                        />
                        {/* <img src={this.state.img} alt='pic' style={{width: '100px'}}/> */}
                    </div>
                    <div>
                        <label>Price: </label>
                        <input 
                            required
                            value={this.state.price}
                            onChange={this.onChangePrice}
                            type='number'
                            min='0'
                            step={0.01}
                        />
                    </div>
                    <div>
                        <label>Qty: </label>
                        <input 
                            required
                            value={this.state.qty}
                            onChange={this.onChangeQty}
                            type='number'
                            min='0'
                        />
                    </div>
                    <div>
                        <input type='submit' value='Add Product' />
                    </div>
                </form>
                <button onClick={this.goBack}>Go Back</button>
                <p>{this.state.addedText}</p>
            </div>
        )
    }
}