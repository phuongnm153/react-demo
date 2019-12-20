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
                <div className={'container mg-t-10'}>
                    <div className="row tree card">
                        <div className="card-body">
                            <Grandfather/>
                        </div>
                    </div>
                </div>
            </AppProvider>
        )
    }
}
