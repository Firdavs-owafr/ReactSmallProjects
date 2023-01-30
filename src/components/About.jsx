import React,{ useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

export  function About() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(json => setPosts(json))
  },[])
  return (
    <div>
        <h1>Our news</h1>
        <ol>
        {
          posts.map((item) => (
            <Link key={item.id} to={`/about/${item.id}`}>
                <li>{item.title}</li>
            </Link>
          ))
        }
        </ol>
    </div>
  )
}
