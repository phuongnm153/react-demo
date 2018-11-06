import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import AddProduct from './product/AddProduct';
import ProductItem from './product/ProductItem';
import EditProduct from './product/EditProduct';

export default class Example extends Component {
    constructor() {
        super();
        this.state = {
            name : 'Mytour Home page',
            products : []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentWillMount(){

    }
    componentDidMount(){

    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">{this.state.name}</div>

                            <div className="card-body">
                                <AddProduct handleFormSubmit={this.handleFormSubmit}/>
                                <hr/>
                                <p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.products.map((product, index) => {
                                        if (product.edit)
                                            return <EditProduct key={index} product={[product, index]} saveProduct={::this.saveProduct} cancelProduct={::this.cancelProduct}/>;
                                        return <ProductItem key={index} product={[product, index]} removeProduct={::this.removeProduct} editProduct={::this.editProduct}/>
                                    })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className="text-center" colSpan="20">
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleFormSubmit(newProduct) {
        this.setState(state => ({
            products : [...state.products, newProduct]
        }));
    }

    editProduct(e, index) {
        let array = [...this.state.products]; // make a separate copy of the array
        array[index] = {...array[index], edit: true};
        this.setState({products: array});
    }

    saveProduct(e, index) {
        let array = [...this.state.products]; // make a separate copy of the array
        array[index] = e;
        this.setState({products: array});
    }

    cancelProduct(e, index) {
        let array = [...this.state.products]; // make a separate copy of the array
        // array[index].edit = false;
        array[index] = {...array[index], edit: false};
        this.setState({products: array});
    }

    removeProduct(e, index) {
        let array = [...this.state.products]; // make a separate copy of the array
        array.splice(index, 1);
        this.setState({products: array});
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
