import React, {Component} from 'react'
import AppContext from '../context'
import Father from './Father'

export default class Grandfather extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="col-sm-12 text-center">
                <div className="card" style="width: 18rem;">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                         aria-label="Placeholder: Image cap"><title>Grandfather</title>
                        <rect width="100%" height="100%" fill="#868e96"/>
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Grandfather</text>
                    </svg>
                    <div className="card-body">
                        <p className="card-text">Tổng số chắt:
                            <AppContext.Consumer>
                                {(context) => context.greatGrandchildren}
                            </AppContext.Consumer>
                        </p>
                    </div>
                </div>
                <Father />
            </div>
        )
    }
}
