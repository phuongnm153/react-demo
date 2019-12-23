import React, {Component} from 'react'
import AppContext from '../context'

export default class Child extends Component {
  constructor() {
    super()
  }

  render() {
    return (
        <li>
            <a href="#">Con</a>
        </li>
    )
  }
}
