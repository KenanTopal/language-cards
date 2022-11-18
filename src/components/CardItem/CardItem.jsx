import React, { useState } from 'react'
import './CardItem.css'
import javascript from '../../assets/javascript.png'

const CardItem = ({ lang: { img, name, options } }) => {

  const [clicked, setClicked] = useState(false)

  /* const clickHandler = () => {
    setClicked(prev => !prev)
  } */


  let html;
  if (clicked) {
    html =(
      <ul>
        {options.map((option, index) => <li key={index.toString()}>{option}</li>)}
      </ul>
      )
  } else {
    html =(
      <>
        <img src={img} />
        <h2>{name}</h2>
      </>
      )
  }

  return (
    <div className='CardItem' onClick={()=> setClicked(prev => !prev)}>
     {/*  {!clicked &&
        <>
          <img src={img} />
          <h2>{name}</h2>
        </>
    
      }

      {clicked && <ul>{options.map((option, index) => <li key={index.toString()}>{option}</li>)}</ul>} */}
      { html }
    </div>

     
  )
}

export default CardItem