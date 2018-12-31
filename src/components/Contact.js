import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <ul>
            <li>Email: {this.props.email}</li>
            <li>Phone: {this.props.phone}</li>
        </ul>
      </div>
    )
  }
}
