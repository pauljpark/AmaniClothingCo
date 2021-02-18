import React from 'react'
import axios from 'axios'

export default class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            img: '',
            price: 0,
            updatedText: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/' + this.props.match.params.id)
        .then(resp => {
            this.setState({
                name: resp.data.name,
                description: resp.data.description,
                img: resp.data.img,
                price: resp.data.price
            })
        }).catch((error) => {
            console.log(error)
        })
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

    onSubmit = (e) => {
        e.preventDefault()

        // //handle file data from state before sending
        const data = new FormData()
        data.append('name', this.state.name)
        data.append('description', this.state.description)
        data.append('img', this.state.img)
        data.append('price', this.state.price)

        axios.post('http://localhost:5000/products/update/'+ this.props.match.params.id, data)
        .then(res => console.log(res.data))
        .then(this.setState({
            updatedText: 'Product updated!'
        }))

        //window.location = '/'
    }

    goBack = () => {
        window.location = '/admin'
    }

    render() {
        return (
            <div>
                <h3>Edit Product Log</h3>
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
                        <img src={this.state.img} alt='pic' style={{width: '100px'}}/>
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
                        <input type='submit' value='Edit Product' />
                    </div>
                </form>
                <button onClick={this.goBack}>Go Back</button>
                <p>{this.state.updatedText}</p>
            </div>
        )
    }
}