import NotificationBell from './NotificationBell.jsx'
import OrderCard from './DeliveryStatus.jsx'
import SongCard from './MusicPlaylist.jsx'
import Seat from './SeatReservation.jsx'
import UserCard from './UserCard.jsx'
import QuizResult from './QuizResult.jsx'
import HabitCard from './DailyHabit.jsx'
import TrafficLight from './TrafficLight.jsx'

const songs = [
    { id: 1, title: 'Song One', artist: 'Artist A', favorite: true },
    { id: 2, title: 'Song Two', artist: 'Artist B', favorite: false },
    { id: 3, title: 'Song Three', artist: 'Artist C', favorite: true },
]

const users = [
    { id: 1, name: 'Arber', online: true },
    { id: 2, name: 'Blerta', online: false },
    { id: 3, name: 'Dren', online: true },
]

function Tasks() {
    return (
        <section className="tasks">
            <h2>5. Notification Bell</h2>
            <div className="task-grid">
                <NotificationBell />
            </div>

            <h2>6. Delivery Status</h2>
            <div className="task-grid">
                <OrderCard order="#101" status="pending" />
                <OrderCard order="#102" status="on-the-way" />
                <OrderCard order="#103" status="delivered" />
            </div>

            <h2>7. Music Playlist</h2>
            <div className="task-grid">
                {songs.map((song) => (
                    <SongCard
                        key={song.id}
                        title={song.title}
                        artist={song.artist}
                        favorite={song.favorite}
                    />
                ))}
            </div>

            <h2>8. Seat Reservation</h2>
            <div className="task-grid">
                <Seat number={1} />
                <Seat number={2} />
                <Seat number={3} />
            </div>

            <h2>9. Online / Offline Users</h2>
            <div className="task-grid">
                {users.map((user) => (
                    <UserCard key={user.id} name={user.name} online={user.online} />
                ))}
            </div>

            <h2>10. Quiz Result</h2>
            <div className="task-grid">
                <QuizResult name="Arber" correctAnswers={9} totalQuestions={10} />
                <QuizResult name="Blerta" correctAnswers={6} totalQuestions={10} />
                <QuizResult name="Dren" correctAnswers={3} totalQuestions={10} />
            </div>

            <h2>11. Daily Habit</h2>
            <div className="task-grid">
                <HabitCard title="Read a book" />
                <HabitCard title="Drink water" />
            </div>

            <h2>12. Traffic Light</h2>
            <div className="task-grid">
                <TrafficLight />
            </div>
        </section>
    )
}

export default Tasks