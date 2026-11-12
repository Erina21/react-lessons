import { useEffect, useState } from 'react'
import AddUserForm from '../components/users/AddUserForm'

function Users() {
    const [users, setUsers] = useState([])
    const getUsers = () => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    useEffect(() => {
        getUsers()
    }, [])
  return (
      <div>
          <AddUserForm getUsers={getUsers}/>
          <ul>
              {users.map((user) => (
                  <li key={user.id}>{user.name}</li>
              ))}
          </ul>
    </div>
  )
}

export default Users