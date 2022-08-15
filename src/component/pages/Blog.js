import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


const Blog = () => {

    const [post, setPost] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const url = "http://localhost:3000/post"
    const fetchpost = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setPost(data)
    }
    useEffect(() => {
        fetchpost()
    }, [])
    return (
        <div>
            {
                post.map((Data) => {
                    return (
                        <div key={Data.id}>
                            <h1>{Data.Title}</h1>
                            <p>{Data.body}</p>
                            <p>{Data.likes}</p>
                            <p>{Data.author}</p> 
                            <Link to={`/Blogs/${Data.id}`} className='active'> Read More </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blog