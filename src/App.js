import React from "react";
import { useState,useMemo } from "react";
import './index.css';
import './Boostrap.css'


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

  const num2 = (num) => {
    console.log('ref');
    let i = 0;
    while(i < 10000) i++
    return num * 2
  }

  const num = useMemo(() => num2(counter), [counter])

    return(
            <div>
              <h1 style={style}> Counter {num}</h1>
              <div className="d-flex">
                <button onClick={plus} className="btn btn-success ">Increase</button>
                <button onClick={onToogle} className="btn btn-danger">Toggle</button>
              </div>
            </div>
)
}