import React, { Component ,useState } from 'react'
import Button from './addButton'
import Counter from './Counter'
export default class test extends Component {
    //const [value,setValue] = useState();
    
   constructor(){
    super();
    this.state = {
        counter:0,
    }
   }

   valueChange =() =>{
        // this.state.counter = 1;
        // let value = this.state.counter+1;
        this.setState({counter:this.state.counter+1});
   }

  render() {
    return (
        <div>
          <Button incrementCounter = {this.valueChange} />
          <Counter counter = {this.state.counter}/>
       </div>
      
    )
  }
}
