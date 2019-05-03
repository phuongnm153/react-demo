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
        axios.delete(api_version + 'products/' + this.state.id)
            .then(response => {
                if (response.data.status) {
                    this.props.dispatch.deleteProduct(this.state.id);
                } else {
                    this.setState({
                        error : '<div className="alert alert-warning alert-dismissible fade show" role="alert">' +
                            '                    <strong>Error!</strong> Có lỗi xảy ra.' +
                            '                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">' +
                            '                    <span aria-hidden="true">&times;</span>' +
                            '                    </button>' +
                            '                    </div>'
                    })
                }

            })
            .catch( error => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
            });
    }
}
