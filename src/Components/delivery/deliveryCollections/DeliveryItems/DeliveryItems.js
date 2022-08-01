import React from 'react'
import "./DeliveryItems.css"

const DeliveryItems = ({ item }) => {
  return (
    <>
      <div className="delivery-item-cover">
        <img src={item.cover} className="delivery-item-img" alt={item.title} />
      </div>
      <div className='delivery-item-title'>{item.title}</div>
    </>
  )
}

export default DeliveryItems