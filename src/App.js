import React from "react";
import { useState } from "react";
import './index.css';
import './Boostrap.css'
import { useCallback } from "react";


export default function App () {
  const [counter,setCounter] = useState(0)
  const [inc,setInc] = useState(true)

  const plus = () => {
    setCounter(prevState => prevState + 1)
  }

  const onToogle = () => {
    setInc(prevState => !prevState)
  }

  const style = {
    color: inc ? 'green' : 'red'
  }


    return(
            <div>
              <h1 style={style}> Counter {counter}</h1>
              <div className="d-flex">
                <button onClick={plus} className="btn btn-success ">Increase</button>
                <button onClick={onToogle} className="btn btn-danger">Toggle</button>
              </div>
            </div>
)
}