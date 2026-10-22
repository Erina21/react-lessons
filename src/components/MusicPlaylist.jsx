

function SongCard({ title, artist, favorite }) {
    return (
        <div className="task-card">
            <h3>{title}</h3>
            <p>{artist}</p>
            <p>{favorite ? 'Favorite' : 'Not Favorite'}</p>
        </div>
    )
}

export default SongCard