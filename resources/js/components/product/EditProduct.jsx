import React, {Component} from 'react';

export default class EditProduct extends Component {
    constructor(props) {
        super(props);
        let [product, index] = [...this.props.product];
        this.state = {...product, index : index};
    }

    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        return (
            <tr>
                <td><input type="text" name="name" className="form-control" value={this.state.name} onChange={::this.handleFieldChange}/></td>
                <td><input type="text" name="name" className="form-control" value={this.state.price} onChange={::this.handleFieldChange}/></td>
                <td><input type="text" name="name" className="form-control" value={this.state.quantity} onChange={::this.handleFieldChange}/></td>
                <td>
                    <a href="" className="btn btn-primary" onClick={::this.saveProduct}>Save</a>&nbsp;&nbsp;
                    <a href="" className="btn btn-danger" onClick={::this.cancelProduct}>Cancel</a>
                </td>
            </tr>
        )
    }

    saveProduct(e) {
        e.preventDefault();
        this.setState({
            edit: false
        }, () => {
            this.props.saveProduct(this.state, this.state.index);
        });
    }

    cancelProduct(e) {
        e.preventDefault();
        this.props.cancelProduct(this.state, this.state.index);
    }
}