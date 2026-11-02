import React from 'react'

function Button({ type,text }) {
  return (
      <div>
          <button type={type} text={text}>
              {text}
          </button>
      </div>
  )
}

export default Button