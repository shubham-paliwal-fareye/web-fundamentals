import React, { Component } from 'react'
import { Button } from 'antd'
import './App.css';

export default class addButton extends Component {
  render() {
    return (
        // <h1>{JSON.stringify(this.props)}</h1>
        <Button type='primary' onClick={()=>this.props.incrementCounter()}>add</Button>
    )
  }
}
