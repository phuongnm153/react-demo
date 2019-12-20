import React, { Component } from 'react'
import AppContext from '../context'
export default class AppProvider extends Component {
    state = {
        greatGrandchildren : 10,
        countGGC: (num) => {
            this.setState({greatGrandchildren: this.state.greatGrandchildren + num})
        }
    }
    render() {
        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
    }
}
