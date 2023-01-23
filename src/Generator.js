import React,{ useState, useEffect } from 'react'

const Generator = ({generat}) => {
    const [item,setItem] = useState([])
    useEffect(() => {
        const newItem = generat()
        setItem(generat)
    },[generat])
  return (
    <ul>
        {item.map((item) => {
            return <li key={item}>{item}</li>
        } )}
    </ul>
)
}

export default Generator