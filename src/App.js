import React, { Component } from "react";
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const url = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await url.json();
    this.setState(users)
  }

  render() {
    return (
      <div>
          {
          this.state.users.map((item) => (
                <h1>{item.name}</h1>
          ))
          }
      </div>
    );
  }

}

export default App;