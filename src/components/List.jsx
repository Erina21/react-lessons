import React from 'react'

function List() {
    const students =["Erza", "Erina", "Morea"]
  return (
      <div>
          <h1>this is a list of students </h1>
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </div>
  )
}

export default List