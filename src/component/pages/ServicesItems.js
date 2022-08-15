import React from 'react'
import { services } from '../../Data'
const ServicesItemsComp = () => {
  return (
    <div className='service'>
      <h1>Our Services</h1>
      <div className='services'>

        {services.map((service) => {
          return (
            <div key={service} className='services-banner'>
              <div>
                <img src={service.img_url} alt='' />
              </div>
              <section>
                <p>{service.ServiceType}</p>
                <p>{service.SeriviceDesc}</p>
              </section>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ServicesItemsComp