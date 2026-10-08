import React from 'react'

function StudentCard({title,course,grade,result,projects}) {
  return (
      <div className="student-card">
          <p className="student-title">{title}</p>
          <p className="student-course">{course}</p>
          <p className="student-grade">{grade}</p>
            <p className="student-result">{result}</p>
    </div>
  )
}

export default StudentCard