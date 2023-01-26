import React,{useContext} from 'react'
import { ContentText } from '../App'


export default function Child5() {
    const count = useContext(ContentText)
  return (
    <div>
        <h1>Child5</h1>
        <h3>{count}</h3>
    </div>
  )
}
