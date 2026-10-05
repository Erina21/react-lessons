
import React from 'react'

function Product({productName, productPrice}) {
  return (
    <div>

      <h1>{productName}</h1>
      <p>{productPrice}</p>
    </div>
  )
}

export default Product