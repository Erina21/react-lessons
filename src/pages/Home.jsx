import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div>Home</div>
      <button>
        <Link to="/courses">Go to courses for more information</Link>
      </button>
    </div>
  )
}

export default Home