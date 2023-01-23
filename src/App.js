import React from "react";
import { useState } from "react";
import './index.css';


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