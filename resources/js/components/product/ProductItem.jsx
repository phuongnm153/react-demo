import React, { Component } from 'react';

export default class ProductItem extends Component {

    render() {
        let [product, index] = [...this.props.product];
        return (
            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                    <a href="" className="btn-link text-primary" onClick={(e) => this.editProduct(e, index)}>Edit</a>&nbsp;&nbsp;
                    <a href="" className="btn-link text-danger" onClick={(e) => this.removeProduct(e, index)}>Remove</a>
                </td>
            </tr>
        )
    }

    editProduct(e, index) {
        e.preventDefault();
        this.props.editProduct(e, index);
    }

    removeProduct(e, index) {
        e.preventDefault();
        this.props.removeProduct(e, index);
    }
}
