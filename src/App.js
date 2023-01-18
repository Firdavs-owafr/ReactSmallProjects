import React, { Component } from "react";
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      class: 'off',
      label: 'Pres'
    }
    this.press = this.press.bind(this)
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
  }

  press(){
    var className = (this.state.class === 'off') ? 'on' : 'off';
    this.setState({class: className})
  }

  render() {

    return (
      <div>
        <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
      </div>
    );
  }

}

export default App;


// fetchApi branch 
