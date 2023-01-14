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
    
    return (
      <div>
            
      </div>
    );
  }

}

export default App;
