import React, {useEffect, useState} from 'react'

import './css/AlertCard.css'



const AlertCard = ({ alertCardInfo }) => {
  let { heading, text } = alertCardInfo;

  return (
    <div className='alert-card'>
      <p><b>{heading}</b></p>
      <p>{text}</p>
    </div>
  )
}

export default AlertCard;