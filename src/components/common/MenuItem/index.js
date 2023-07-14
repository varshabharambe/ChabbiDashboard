import React from 'react'

const menuItem = (props) => {
    const {imgSrc, val} = props;
  return (
    <div>
        <img src={imgSrc} alt=""/>
        <div>{val}</div>
    </div>
  )
}

export default menuItem;