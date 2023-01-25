import React,{ useContext }  from 'react'
import Context from './Context';

export default function StatusCard(props) {
    const value = useContext(Context)

  return (
    <div>  <h2>Vsego kupleno {value.counter} knig</h2>
    <p>kupite moi knigi</p> </div>
  )
}
