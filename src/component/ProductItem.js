import React from 'react'
import { products } from '../Data'
const ProductItemComp = () => {
  return (
    <div className='product'>
      {products.map((item) => {
        return (
          <div key={item} className='product_banner'>
            <div className='img_url'>
              <img src={item.img_url} alt='' />
            </div>
            <section className='txt'>

              <p className='name'>{item.name}</p>
              <p><span>Description:</span> {item.description}</p>
              <section>
                <p><span>Category:</span> {item.category}</p>
                <p><span>Price:</span> {item.price}</p>
              </section>
              <button className='btn'>Buy</button>
            </section>
          </div>
        );

      }
      )
      }

    </div >
  )
}

export default ProductItemComp