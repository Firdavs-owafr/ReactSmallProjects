import React,{useState,useEffect} from 'react'

const Generator = ({generat}) => {
    const [item,setItem] = useState([])
    useEffect(() => {
        const newItem = generat()
        setItem(newItem)
    }, [generat])
    return (
        <ul>
            {
                item.map((item) => (
                     <li key={item}>{item}</li>
                ))
            }
        </ul>
    )
}

export default Generator