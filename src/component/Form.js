import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [likes, setLikes] = useState(0)
    let navigate = useNavigate()

    const handleSubmit = async (e) => {

        let formEndpoint = "http://localhost:3000/post"
        e.preventDefault()
        const data = {
            Title: title,
            body: body,
            author: author,
            likes: likes,
            publishedTime: new Date().toISOString().substr(0, 16)

        }

        await fetch(formEndpoint, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content_Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        navigate("/Blogs");

    }
    return (
        <div className='form'>
            <h1> Create a new blog</h1>
            <form onSubmit={handleSubmit} action="http://localhost:3000/post" method='POST'>
                <input type='text' name='Title' required placeholder='blog title' onChange={(e) => setTitle(e.target.value)} />
                <textarea name='blog' required placeholder='blog body' onChange={(e) => setBody(e.target.value)} />
                <input type='text' name='Author' required placeholder='Author' onChange={(e) => setAuthor(e.target.value)} />
                <button>Publish</button>
            </form>
        </div>
    )
}

export default Form