import React,{Component} from "react";
import './index.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: 'Helloo',
      textI: 611
    }
    this.showText = this.showText.bind(this) // bog'lamoq 
    this.showInput = this.showInput.bind(this)
  }

  showText() {
    this.setState({text: 'hii'})
  }

  //   showText = () => {
  //   this.setState({text: 'hii'}) // arrow functionga keremas bog'lash
  // }

  showInput(e) {
    this.setState({textI: e.target.value})
  }

  move = (e) => {
    console.log(e.target.textContent);
  }

  render(){
    return (
      <div>
        <button onClick={this.showText}>Push</button>
          <input type="text" onInput={this.showInput} />
          <p onMouseMove={this.move}>WOW</p>
        <p>{this.state.text}</p>
        <p>{this.state.textI}</p>
      </div>
    );
  }
}

export default App;
