import React,{ useContext } from 'react'
import { Conten } from '../App'

export default function Child1() {
  const useContextt = useContext(Conten)
  console.log(useContextt);
  return (
    <div>
        <h1>hii</h1>
        {useContextt.name}
    </div>
  )
}
