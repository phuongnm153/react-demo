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
            children.push(<Child />)
        }
        return children
    }

  render() {
    return (
        <AppContext.Consumer>
            {(context) => (
                <Fragment>
                    <div className="card" style="width: 18rem;">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                             aria-label="Placeholder: Image cap"><title>Me</title>
                            <rect width="100%" height="100%" fill="#868e96"/>
                            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Me</text>
                        </svg>
                        <div className="card-body">
                            <p className="card-text">Tổng số con:
                                {context.greatGrandchildren}
                            </p>
                        </div>
                    </div>
                    {this.createChildren(context.greatGrandchildren)}
                </Fragment>
            )}
        </AppContext.Consumer>
    )
  }
}
