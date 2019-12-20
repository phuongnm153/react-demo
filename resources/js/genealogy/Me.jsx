import React, {Component, Fragment} from 'react'
import AppContext from '../context'
import Child from './Child'

export default class Me extends Component {
    constructor() {
        super()
    }

    createChildren = (numChild) => {
        let children = []

        // Outer loop to create parent
        for (let i = 0; i < numChild; i++) {
            //Create the parent and add the children
            children.push(<Child key={i}/>)
        }
        return children
    }

    render() {
        return (
            <AppContext.Consumer>
                {(context) => (
                    <ul>
                        <li>
                            <a href="#">Me
                                <p className="card-text">Tổng số con:
                                    {context.greatGrandchildren}
                                </p>
                            </a>
                            <div>
                                <button className={'btn btn-info'} onClick={() => context.countGGC(1)}>
                                    +
                                </button>
                            </div>
                            <ul>
                            {this.createChildren(context.greatGrandchildren)}
                            </ul>
                        </li>
                    </ul>
                )}
            </AppContext.Consumer>
        )
    }
}
