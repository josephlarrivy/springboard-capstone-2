import React, {useEffect, useState} from 'react'

import './css/AlertCard.css'



const AlertCard = ({ alertCardInfo, alertCardButtonFunction }) => {
  let { heading, text } = alertCardInfo;

  return (
    <div className='alert-card'>
      <p><b>{heading}</b></p>
      <p>{text}</p>
      {alertCardButtonFunction && 
        <button onClick={alertCardButtonFunction}>Yes</button>
      }
    </div>
  )
}

export default AlertCard;