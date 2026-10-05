import React from 'react'

function Property({name, sold}) {
  return (
    <div>
                  <h2>{name}</h2>
                  <p>{sold ? "Sold" : "Not Sold"}</p>
              </div>
  )
}

export default Property