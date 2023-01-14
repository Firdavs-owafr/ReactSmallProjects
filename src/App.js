import React,{Component} from "react";
import './index.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '',
      age: '',
    }
    this.inputt = this.inputt.bind(this)
    this.notReset = this.notReset.bind(this)
  }

  inputt(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  notReset(e) {
    e.preventDefault()
  }

  render(){
    let newInput = ''
    if(this.state.text !== '') {
      newInput = <h1>Your text: {this.state.text}</h1>
    } else {
      newInput = ''
    }
    return (
      <div>
            <form onSubmit={this.notReset}>
                <input type="text" onChange={this.inputt} name="text" />
                <input type="number" onChange={this.inputt} name="age" />
                {newInput}
                <h2>Your age: {this.state.age}</h2>
                <input type="submit" value="CLICK" />
            </form>
      </div>
    );
  }

}

export default App;
