import React from 'react'
import './CardItem.css'
import javascript from '../../assets/javascript.png'

const CardItem = ({lang:{img,name}}) => {

  return (
    <div className='CardItem'>
      <img src={img}/>
      <h2>{name}</h2>
      
    </div>
  )
}
 
export default CardItem