import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import AddProduct from './product/AddProduct';
import ProductItem from './product/ProductItem';
import EditProduct from './product/EditProduct';

export default class Example extends Component {
    constructor() {
        super();
        this.state = {
            header: 'Mytour Home',
            search: '',
            page: 1,
            products: {
                last_page: 1,
                data: []
            }
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentWillMount() {
        this.getProducts();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">{this.state.header}</div>

                            <div className="card-body">
                                <AddProduct handleSubmit={this.handleFormSubmit}/>
                                <hr/>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.products.data.map((product, index) => {
                                        if (product.edit)
                                            return <EditProduct key={product.id} product={[product, product.id]} saveProduct={::this.saveProduct} cancelProduct={::this.cancelProduct}/>;
                                        return <ProductItem key={product.id} product={[product, product.id]} removeProduct={::this.removeProduct} editProductParent={::this.editProductView}/>
                                    })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan='20'>
                                                <ReactPaginate
                                                    pageCount={this.state.products.last_page}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={5}
                                                    previousLabel={"Previous"}
                                                    nextLabel={"Next"}
                                                    previousClassName={"page-item"}
                                                    nextClassName={"page-item"}
                                                    previousLinkClassName={"page-link"}
                                                    nextLinkClassName={"page-link"}
                                                    breakLabel={"..."}
                                                    breakClassName={"page-link"}
                                                    onPageChange={this.handlePageClick}
                                                    containerClassName={"pagination justify-content-center"}
                                                    pageClassName={"page-item"}
                                                    pageLinkClassName={"page-link"}
                                                    activeClassName={"active"}/>
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

    handlePageClick = (data) => {
        let selected = data.selected + 1;

        this.setState({page: selected}, () => {
            this.getProducts()
        });
    };

    getProducts() {
        axios.get(api_version + 'products', {
            params: {
                search: this.state.search,
                page: this.state.page
            }
        })
        .then(response => {
            // handle success
            console.log(response.data);
            this.setState({
                products: response.data
            });
        })
        .catch( error => {
            // handle error
            console.log(error);
        })
        .then(() => {
            // always executed
        });
    }

    handleFormSubmit(newProduct) {
        this.setState(state => ({
            products: [...state.products, newProduct]
        }));
    }

    editProductView(e, index) {
        let array = [...this.state.products]; // make a separate copy of the array
        array[index] = {...array[index], edit: true};
        this.setState({products: array});
    }

    saveProduct(updatedProduct, index) {
        let array = [...this.state.products]; // make a separate copy of the array
        array[index] = updatedProduct;
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
    ReactDOM.render(<Example/>, document.getElementById('example'));
}
