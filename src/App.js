import React,{ createContext } from 'react'
import Child1 from './components/Child1'

export const Conten = createContext(null)

const newobj = {
  name: 'As',
  age: 30
} 

export default function App() {
  return (
    <Conten.Provider value={newobj}>
        <Child1  />
    </Conten.Provider>
  )
}
