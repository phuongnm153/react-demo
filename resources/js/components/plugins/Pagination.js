import React, { Component } from 'react';

class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: this.props
        };
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount(){

    }

    onChange(e) {
        e.preventDefault();
        this.props.onChange(this.state.activePage);
    }

    render() {
        console.log(this.state, this.props);
        return (
            <ul className={'pagination ' + this.props.customClass}>
                <li className="page-item"><a className="page-link" role="button" href="#"><span aria-hidden="true">«</span></a></li>
                <li className="page-item"><a className="page-link" role="button" href="#"><span aria-hidden="true">‹</span></a></li>
                <li className="page-item"><a className="page-link" role="button" href="#">1</a></li>
                <li className="page-item disabled"><a className="page-link" role="button" href="#"><span aria-hidden="true">…</span></a></li>
                <li className="page-item"><a className="page-link" role="button" href="#">10</a></li>
                <li className="page-item"><a className="page-link" role="button" href="#">11</a></li>
                <li className="page-item active"><span className="page-link">12</span></li>
                <li className="page-item"><a className="page-link" role="button" href="#">13</a></li>
                <li className="page-item"><a className="page-link" role="button" href="#">14</a></li>
                <li className="page-item disabled"><a className="page-link" role="button" href="#"><span aria-hidden="true">…</span></a></li>
                <li className="page-item"><a className="page-link" role="button" href="#">20</a></li>
                <li className="page-item"><a className="page-link" role="button" href="#"><span aria-hidden="true">›</span></a></li>
                <li className="page-item"><a className="page-link" role="button" href="#"><span aria-hidden="true">»</span></a></li>
            </ul>
        )
    }
}
// Pagination.propTypes = { initialCount: PropTypes.number };
// Set default props
Pagination.defaultProps = {
    hasFirstLast: true,
    hasPreviousNext: true,
    customClass: '',
    activePage: 1,
    itemsCountPerPage: 10,
    totalItemsCount: 10,
    pageRangeDisplayed: 5
};

export default Pagination;