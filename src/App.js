import React,{ useState } from 'react'
import { createContext } from 'react'
import Child1 from './components/Child1'

export const ContentText = createContext(0)

export default function App() {
  const [counter, setCounter] = useState(0)
  return (
    <ContentText.Provider value={counter}>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <Child1 coun={counter} /> 
    </ContentText.Provider>
  )
}
