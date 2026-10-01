import React from 'react'

function CourseCard({name, instructor, duration}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration}</p>
    </div>
  )
}

export default CourseCard