import React from 'react'

const Modal = ({modal, setModal}) => {
  if (modal === true) {
    return (
      <div>
        <p>Esse é o modal <button onClick={() => setModal(false)}>Fechar</button></p>      
      </div>
    )
  } else {
    return null
  }
}

export default Modal