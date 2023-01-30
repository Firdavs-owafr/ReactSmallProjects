import React,{ useState,useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export function Single() {
    const { id } = useParams()

    const [posts, setPosts] = useState(null)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(json => setPosts(json))
  },[id])
  return (
    <>
        {posts && 
            <>
                <h1>{posts.title}</h1>
                <p>{posts.body}</p>
                <Link to={`/about/${id}/edit`}>Edit post</Link>
            </>
        }
    </>
  ) 
}
