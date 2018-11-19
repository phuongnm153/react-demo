import React, { Component } from 'react';

export default class ProductItem extends Component {

    constructor(props){
        super(props);
        this.state = this.props.product
    }

    render() {
        return (
            <tr>
                <td>{this.state.id}</td>
                <td>{this.state.name}</td>
                <td className={"text-right"}>{this.state.price}</td>
                <td className={"text-right"}>{this.state.quantity}</td>
                <td>
                    <a href="" className="btn btn-link text-primary" onClick={::this.editProduct}>Edit</a>&nbsp;&nbsp;
                    <a href="" className="btn btn-link text-danger" onClick={::this.removeProduct}>Remove</a>
                </td>
            </tr>
        )
    }

    editProduct(e) {
        e.preventDefault();
        this.props.dispatch.editProduct(this.state.id);
    }

    removeProduct(e) {
        e.preventDefault();
        this.props.dispatch.deleteProduct(this.state.id);
    }
}
