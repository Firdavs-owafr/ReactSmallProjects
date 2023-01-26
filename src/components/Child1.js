import React,{ useContext } from 'react'
import Child2 from '../components/Child2'
import { ContentText } from '../App'

export default function Child1() {

    const count = useContext(ContentText)
  return (
    <div>
        <h1>{count}</h1>
        <Child2/>
    </div>
  )
}
