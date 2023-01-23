import React from "react";
import { useState,useEffect } from "react";
import './index.css';
import './Boostrap.css'


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
  // use Callback
  const randomm = () => {
    setCounter( Math.floor(Math.random() * 10) )
  }

  useEffect(() => {
    console.log('WOW');
    document.title = 'React ' +  counter
  })

    return(
            <div>
              <h1>{counter}</h1>
              <div className="d-flex">
                <button onClick={plus} className="btn btn-success ">+</button>
                <button onClick={minus} className="btn btn-danger">-</button>
                <button onClick={nulll} className='btn btn-dark'>0</button>
                <button onClick={randomm} className='btn btn-primary'>Random</button>
              </div>
            </div>
)
}