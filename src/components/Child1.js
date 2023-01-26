import React from 'react'
import { useContext } from 'react'
import { ContentText } from '../App'
import Child2 from './Child2'

export default function Child1() {
    const count = useContext(ContentText)
  return (
    <div>
        <h1>Child1</h1>
        <h2>{count}</h2>
        <Child2/>
    </div>
  )
}
