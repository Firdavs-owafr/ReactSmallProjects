import React,{ useContext } from 'react'
import { ContentText } from '../App'

export default function Child5() {
    const count = useContext(ContentText)
  return (
    <div>
        <h3>Child5</h3>
        <h2>{count}</h2>
    </div>
  )
}
