

function UserCard({ name, online }) {
    return (
        <div className="task-card">
            <h3>{name}</h3>
            <p className={online ? 'online' : 'offline'}>
                {online ? 'Online' : 'Offline'}
            </p>
        </div>
    )
}

export default UserCard