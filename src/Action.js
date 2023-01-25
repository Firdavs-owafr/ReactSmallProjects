import React,{ useContext } from 'react'
import Context from './Context'

export default function Action({number}) {
    const value = useContext(Context)
     
    const handleClick = () => {
        value.count(number)
    }


  return (
    <div className="card">
    <button type="button" onClick={handleClick} className="btn btn-primary btn-block w-100">
      kupite {number} knig
    </button>
  </div>
  )
}
