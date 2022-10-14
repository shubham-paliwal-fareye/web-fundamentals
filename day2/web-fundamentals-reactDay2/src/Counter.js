import React, { Component } from 'react'

export default class Counter extends Component {
  render() {

    return (
    //   <button onClick={this.counterValue}>add</button>
    <h1> {this.props.counter} </h1>
    )
  }
}
