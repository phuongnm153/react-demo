import React, {Component} from 'react'
import AppContext from '../context'
import Father from './Father'

export default class Grandfather extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="col-sm-6 text-center offset-sm-3">
                <ul>
                    <li>
                        <a href="#">Parent
                            <p className="card-text">Tổng số chắt:
                                <AppContext.Consumer>
                                    {(context) => context.greatGrandchildren}
                                </AppContext.Consumer>
                            </p>
                        </a>
                        <Father />
                    </li>
                </ul>
            </div>
        )
    }
}
