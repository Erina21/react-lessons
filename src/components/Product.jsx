import React, { useState } from 'react'

function Product({name, price}) {
    const [quantity, setQuantity] = useState(1)
    
  return (
    <div>
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
          <p>Price: {price}</p>
          <h1>Total: {quantity * price}</h1>
          
          <button onClick={() => setQuantity(quantity + 1)}>Increase Quantity</button>
          <button onClick={() => setQuantity(quantity - 1)}>Decrease Quantity</button>
    </div>
  )
}

export default Product