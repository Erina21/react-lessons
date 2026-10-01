import React, { useState } from 'react'

function StudentCard({name,course}) {
   const [present, setPresent] =useState(false)
  return (
    <div>
      <p>{present ? "Present" : "notPresent"}</p>
          <button onClick={() => setPresent(!present)}>Attendacnce</button>
          <p>Name: {name}</p>
          <p>Course: {course}</p>
    </div>
  )
}

export default StudentCard