import React,{useState} from "react";
import './index.css';
import ActionsCard from "./ActionsCard";
import StatusCard from "./StatusCard";
import  Context  from "./Context";

export default function App() {
    const [counter, setcounter] = useState(0)

    const count = (n) => {
      setcounter(counter + n)
    }

    const value = {
      counter,
      count
    }

  return (
    <Context.Provider value={value}>
      <div className="container">
        <StatusCard/>
        <ActionsCard/>
    </div>
    </Context.Provider>
  )
}