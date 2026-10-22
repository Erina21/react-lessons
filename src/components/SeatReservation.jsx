import { useState } from 'react'

function Seat({ number }) {
    const [reserved, setReserved] = useState(false)

    return (
        <div className="task-card">
            <h3>Seat {number}</h3>
            <p>{reserved ? 'Reserved' : 'Available'}</p>
            <button onClick={() => setReserved(!reserved)}>
                {reserved ? 'Cancel Reservation' : 'Reserve'}
            </button>
        </div>
    )
}

export default Seat