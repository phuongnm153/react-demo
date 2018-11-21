import React, {Component} from 'react';

import ReactPaginate from 'react-paginate';

import AddProduct from './product/AddProduct';
import ProductItem from './product/ProductItem';
import EditProduct from './product/EditProduct';

import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: 'Mytour Home',
            search: '',
            page: 1,
            last_page: 1,
            products: [],
            loading: true
        };
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.getProducts();
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">{this.state.header}</div>

                            <div className="card-body">
                                <AddProduct dispatch={this.props}/>
                                <hr/>
                                <div className="table-responsive">
                                    <div className="table-processing" style={{display : this.state.loading ? 'block' : 'none'}}>Loading...</div>
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.props.products.map((product) => {
                                            if (product.edit)
                                                return <EditProduct key={product.id} product={product} dispatch={this.props}/>;
                                            return <ProductItem key={product.id} product={product} dispatch={this.props}/>
                                        })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan='20'>
                                                    <ReactPaginate
                                                        pageCount={this.state.last_page}
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
        this.setState({
            loading: true
        });
        axios.get(api_version + 'products', {
            params: {
                search: this.state.search,
                page: this.state.page
            }
        })
        .then(response => {
            // handle success
            this.setState({
                last_page: response.data.last_page,
                // products: response.data.data
            });
            this.props.listingProduct(response.data.data);
        })
        .catch( error => {
            // handle error
            console.log(error);
        })
        .then(() => {
            // always executed
            this.setState({
                loading: false
            });
        });
    }
}

const mapStateToProps = (state) => ({
    //this.props.products = store.productReducer
    products: state.productReducer
});

const mapDispatchToProps = dispatch => (
    bindActionCreators(actions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Example);
