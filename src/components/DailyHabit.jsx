import { useState } from 'react'

function HabitCard({ title }) {
    const [done, setDone] = useState(false)

    return (
        <div className="task-card">
            <h3>{title}</h3>
            <p>{done ? 'Completed' : 'Not Done'}</p>
            <button onClick={() => setDone(!done)}>
                {done ? 'Reset' : 'Mark Done'}
            </button>
        </div>
    )
}

export default HabitCard