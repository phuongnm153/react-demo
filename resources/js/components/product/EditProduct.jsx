import React, {Component} from 'react';

export default class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.product;
    }

    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        return (
            <tr>
                <td>{this.state.id}</td>
                <td><input type="text" name="name" className="form-control" value={this.state.name} onChange={::this.handleFieldChange}/></td>
                <td><input type="text" name="price" className="form-control" value={this.state.price} onChange={::this.handleFieldChange}/></td>
                <td><input type="text" name="quantity" className="form-control" value={this.state.quantity} onChange={::this.handleFieldChange}/></td>
                <td>
                    <a href="" className="btn btn-primary" onClick={::this.saveProduct}>Save</a>&nbsp;&nbsp;
                    <a href="" className="btn btn-danger" onClick={::this.cancelProduct}>Cancel</a>
                </td>
            </tr>
        )
    }

    saveProduct(e) {
        e.preventDefault();
        this.props.dispatch.updateProduct(this.state);
    }

    cancelProduct(e) {
        e.preventDefault();
        this.props.dispatch.cancelProduct(this.state.id);
    }
}