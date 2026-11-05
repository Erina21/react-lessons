import React from 'react'
import { Link } from 'react-router-dom'

function Courses() {
  return (
    <div>
      <div>Courses</div>
      <button>
        <Link to="/">Go back to home</Link>
      </button>
    </div>
  )
}

export default Courses