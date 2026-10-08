import React from 'react'
import StudentCard from './StudentCard'

function StudentStatictics() {
  return (
      <div className="student-statistics">
          <StudentCard title="John Doe" course="Mathematics" grade="A" result="Pass" projects="3" />
          <StudentCard title="Jane Smith" course="Science" grade="B" result="Pass" projects="2" />
          <StudentCard title="Michael Johnson" course="History" grade="C" result="Fail" projects="1" />
    </div>
  )
}

export default StudentStatictics