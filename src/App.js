import React, { Component } from "react";
import './index.css';
import Li from './Li'

class App extends Component { 
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  async componentDidMount(){
    const urlBase = await fetch('https://jsonplaceholder.typicode.com/todos') 
    const users = await urlBase.json();
    this.setState({users})
  }

  render() {
    return (
      <div>
          <Li dataBazzz={this.state.users}/>
      </div>
    )
  }

}

export default App;