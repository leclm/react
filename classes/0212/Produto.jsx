import React from 'react'

const Produto = ({nome, propriedades}) => {
  return (
    <div style={{border: '1px solid black', padding: '10px 20px', margin: '20px 0'}}>
      <p>{nome}</p>
      <ul>
        {
          propriedades.map(propriedade => (
            <li>{propriedade}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Produto