import React, {Component, Fragment} from 'react'
import AppContext from '../context'
import Me from './Me'

export default class Father extends Component {
  constructor() {
    super()
  }

  render() {
    return (
        <Fragment>
            <div className="card" style="width: 18rem;">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                     aria-label="Placeholder: Image cap"><title>Father</title>
                    <rect width="100%" height="100%" fill="#868e96"/>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Father</text>
                </svg>
                <div className="card-body">
                    <p className="card-text">Tổng số cháu:
                        <AppContext.Consumer>
                            {(context) => context.greatGrandchildren}
                        </AppContext.Consumer>
                    </p>
                </div>
            </div>
            <Me />
        </Fragment>
    )
  }
}
