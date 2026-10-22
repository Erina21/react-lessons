import { useState } from 'react'

function TrafficLight() {
    const [light, setLight] = useState('Red')

    return (
        <div className="task-card">
            <h3>Traffic Light</h3>
            <p>{light}</p>
            <button
                onClick={() =>
                    setLight(light === 'Red' ? 'Yellow' : light === 'Yellow' ? 'Green' : 'Red')
                }
            >
                Next
            </button>
        </div>
    )
}

export default TrafficLight