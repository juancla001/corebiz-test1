import React, { useState } from 'react'

export const Dots = ({initState = false}) => {

  const init = {
    bool: initState,
    active: '#F8475F',
    inactive: '#BDBDBD',
  }

  const [dot, setDot] = useState(init)

  const handleStyle = (e) => {
    e.preventDefault();
    dot.bool = !dot.bool
    setDot({...dot})
  }

  const style = dot.bool ? dot.active : dot.inactive

  return (
    <div 
      className='dot-element'
      onClick={handleStyle}
      style={{background: style}}
      >
      
    </div>
  )
}
