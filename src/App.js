import React, { Component } from "react";
import { useState } from "react";
import './index.css';

// export default class App extends Component { 
//   constructor(props){
//     super(props)
//     this.state = {
//       counter: 0
//     }
//   }

//   plus = () => {
//     this.setState(prevState => ({counter: prevState.counter + 1}))
//   }

//   minus = () => {
//     this.setState(prevState => ({counter: prevState.counter - 1}))
//   }

//   null = () => {
//     this.setState(prevState => ({counter: 0}))
//   }

//   render(){
//     return(
//       <div>
//         <h1>{this.state.counter}</h1>
//         <div className="d-flex">
//           <button onClick={this.plus} className="btn btn-success">+</button>
//           <button onClick={this.minus} className="btn btn-danger">-</button>
//           <button onClick={this.null} className='btn btn-dark'>0</button>
//         </div>
//       </div>
//     )
//   }
// }

export default function App () {
  const [counter,setCounter] = useState(0)

  const plus = () => {
    setCounter(prevState => prevState + 1)
  }

  const minus = () => {
    setCounter(prevState => prevState - 1)
  }
  
  const nulll = () => {
    setCounter(0)
  }

  const randomm = () => {
    setCounter( Math.floor(Math.random() * 10) )
  }



    return(
            <div>
              <h1>{counter}</h1>
              <div className="d-flex">
                <button onClick={plus} className="btn btn-success">+</button>
                <button onClick={minus} className="btn btn-danger">-</button>
                <button onClick={nulll} className='btn btn-dark'>0</button>
                <button onClick={randomm} className='btn btn-dark'>Random</button>
              </div>
            </div>
          )
}