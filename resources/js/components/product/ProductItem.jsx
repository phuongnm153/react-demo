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
                    <button className="btn btn-link text-primary" onClick={::this.editProduct}>Edit</button>&nbsp;&nbsp;
                    <button className="btn btn-link text-danger" onClick={::this.removeProduct}>Remove</button>
                </td>
            </tr>
        )
    }

    editProduct() {
        this.props.dispatch.editProduct(this.state.id);
    }

    removeProduct() {
        this.props.dispatch.deleteProduct(this.state.id);
    }
}
