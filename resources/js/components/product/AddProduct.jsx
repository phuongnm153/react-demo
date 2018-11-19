import React, { Component } from 'react';

export default class AddProduct extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            price: '',
            quantity: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({
            id: Math.floor((Math.random() * 100) + 1) //a random number between 1 and 100
        }, () => {
            this.props.dispatch.addProduct(this.state);
            this.setState({
                name: '',
                price: '',
                quantity: ''
            });
        });
    }

    render() {
        return (
            <form onSubmit={::this.onSubmit}>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                        <input type="text" name="name" className="form-control mb-2" placeholder="Jane Doe" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">Price</label>
                        <input type="text" name="price" className="form-control mb-2" placeholder="Price" value={this.state.price} onChange={this.handleChange}/>
                    </div>
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">Quantity</label>
                        <input type="text" name="quantity" className="form-control mb-2" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChange}/>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-2">Add</button>
                    </div>
                </div>
            </form>
        )
    }
}