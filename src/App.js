import React, { useRef, useState } from "react";
import './index.css';
import './Boostrap.css'

export default function App() {
  const [state, setSate] = useState('')
  const [state2, setSate2] = useState('')
  const cvcRed = useRef(null)
  const cvcRef2 = useRef(null)

  const handle = (e) => {
    const value = e.target.value;
    setSate(value)
    console.log(value.length);
    if (value.length === 16) {
      cvcRed.current.focus()
    }
  }

  const handle22 = (e) => {
    const value = e.target.value;
    setSate2(value)
    if (value.length === 4) {
      cvcRef2.current.focus()
    }
  }

  return (
    <div>
      <h1>hi</h1>
      <input type="text" className="form-control " placeholder="Card Number" onChange={handle} value={state} />
      <input ref={cvcRed} type="text" className="form-control" placeholder="Secure" onChange={handle22} value={state2} />
      <input ref={cvcRef2} type="text" className="form-control" placeholder="Oppa" />
    </div>
  )
}