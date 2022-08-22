import React from 'react'
import { Link } from 'react-router-dom'


const HomeComp = () => {
  let img_url = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
  return (
    <div className='hero'>

      <section className='home'>
        <p>Welcome to <span>Spencer</span></p>
        <p className='banner'>Check out our products</p>
        <Link to='/Product'><button className='btn'>See More</button></Link>
      </section>

      <section className='img'>
        <img src={img_url} alt='bags' />
      </section>
    </div>
  )
}

export default HomeComp