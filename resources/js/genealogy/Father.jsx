import React, {Component, Fragment} from 'react'
import AppContext from '../context'
import Me from './Me'

export default class Father extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <ul>
                <li>
                    <a href="#">Father
                        <p className="card-text">Tổng số cháu:
                            <AppContext.Consumer>
                                {(context) => context.greatGrandchildren}
                            </AppContext.Consumer>
                        </p>
                    </a>
                    <Me/>
                </li>
            </ul>
        )
    }
}
