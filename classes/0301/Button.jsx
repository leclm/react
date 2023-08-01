import React from 'react'

const Button = ({texto, modal, setModal}) => {
  if (modal === false) {
    return (
      <button onClick={() => setModal(true)}>{texto}</button>
    )
  } else {
    return null
  }
  
}

export default Button