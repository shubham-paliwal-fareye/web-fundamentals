import React, { Component } from 'react'
import Drawer from '../component/drawerForm'
import PrintUser from '../component/PrintUser'

export default class UserList extends Component {
  //  data = [];
   constructor(){
    super();
    this.printUser = this.printUser.bind(this);
    this.state = {
      user:{
        firstName:'shubham',
        lastName:'patidar',
        email:'shubha@gmail.com',
        githubUserName:'shubham'
      },
      data:[]
     }
   }

  printUser(userData){
    console.log("User List",userData);
    //this.setState({data:this.state.data.push(userData)});
    let data=[...this.state.data,userData]
    console.log("hey new data" ,this.state.data);
    this.setState({data});
  }
  render() {
    return (
      <div>
        <Drawer printUser = {this.printUser} />
        <PrintUser data={this.state.data}/>
      </div>
    )
  }
}
