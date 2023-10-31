import React, { useState } from 'react'

const Tour = ({id, image,info, name, price, removeTour}) => {

    const [redMore , setredMore] = useState(false)

  return (
   <article className='single-tour'>
     <img src={image} alt={name} className='img' />
     <span className='tour-price'>${price}</span>
     <div className='tour-info'>
        <h5>{name}</h5>
        <p>{redMore ? info : `${info.substring(0,200)}...` } <button type='button' className='info-btn' onClick={() => setredMore(!redMore)}> {redMore ? 'show less ' : 'read more'}</button> </p>
     </div>
     <button type='button' className='btn btn-block delete-btn' onClick={() => removeTour(id)}>Not Interested</button>
   </article>
  )
}

export default Tour