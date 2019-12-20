import React, {Component} from 'react'
import AppProvider from '../provider/AppProvider'
import Grandfather from './Grandfather'

export default class Index extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <AppProvider>
                <div className="red">
                    <Grandfather/>
                </div>
            </AppProvider>
        )
    }
}
