import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexcolor}) => {
  const [alert,setAlert] = useState(false)
  const bcg = rgb.join(',')
  // const hex = rgbToHex(...rgb)
  const hexValue = `#${hexcolor}`
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000);
    return () => {
      clearTimeout(timeout)
    };
  }, [alert]);
  return <article 
  className={`color ${index > 10 && 'color-light'}`} 
  style={{backgroundColor : `rgb(${bcg})`}}
  onClick={() => {
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
  }} 
  >
    <p className='percent-value'>{weight}</p>
    {/* this shows hexcode by using a function utils */}
    {/* <p className='color-value'>{hex}</p> */}
    {/* this method takes hexcode directly from the color array */}
    <p className='color-value'>{hexValue}</p>
    {alert && <p className='alert'>Copied to clipboard</p>}
  </article>
}

export default SingleColor
