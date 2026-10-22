import { useState } from 'react'

function NotificationBell() {
    const [notifications, setNotifications] = useState(0)
  return (
      <div className="task-card">
          <h3>Notifications Bell</h3>
          <p>Notifications:{notifications}</p>
          <p>{notifications === 0 ? 'No new notifications' : `${notifications} new notifications`}</p>
         <button onClick={() => setNotifications(notifications + 1)}>Add Notification</button>
          
          
    </div>
  )
}

export default NotificationBell