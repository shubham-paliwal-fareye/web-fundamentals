import React, { Component } from 'react'
import Drawer from '../component/drawerForm'
import PrintUser from '../component/PrintUser'
import axios from 'axios'
export default class UserList extends Component {
  //  data = [];
   constructor(){
    super();
    this.printUser = this.printUser.bind(this);
    this.state = {
      user:{
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        githubUsername:''
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
    axios.post(`/user/add`,({
         firstName: userData.firstName,
         lastName: userData.lastName,
         email:userData.email,
         password:userData.password,
         githubUsername:userData.githubUserName
    }))

  }
  render() {
    return (
      <div>
        <Drawer printUser = {this.printUser} name={"Add User"} callFrom = {"AddUser"} user={this.state.user}/>
        <PrintUser data={this.state.data}/>
      </div>
    )
  }
}
