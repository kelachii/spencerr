import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import UpdateForm from '../UpdateForm'

const SingleBlogPage = (posts) => {
  let navigate = useNavigate()
  const deletePost = async () => {

    const res = await fetch(url, { method: "DELETE" })
    navigate = ('/Blogs')
  }
  const [post, setPost] = useState([])
  let { BlogId } = useParams()

  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const url = `http://localhost:3000/post/${BlogId}`
  const fetchData = async (e) => {
    const response = await fetch(url)
    const data = await response.json()
    setPost(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1>{post.Title}</h1>
      <p>{post.body}</p>
      <p>{post.author}</p>
      <p>{post.likes}</p>
      <h1>Blog {BlogId}</h1>
      <button onClick={deletePost} className='btn'>DELETE POST</button>
      <button onClick={handleToggle} className='btn'>Edit</button>

      {
        toggle && <UpdateForm
          id={post.id}
          title={post.Title}
          body={post.body}
          author={post.author}
        />
      }
    </div>
  )
}

export default SingleBlogPage