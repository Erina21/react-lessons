import React, { useState } from 'react'
import Input from '../common/Input'

function AddUserForm({getUsers}) {
  const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const addUser = () => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
        }).then((response) => response.json())
            .then(() => {
                getUsers()
                setName('')
                setEmail('')
            })
    }
    
  return (
      <div className="form-card">
          <h2>Add new Card</h2> 
          <Input
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          <Input
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" onClick={addUser}>Add User</button>
    </div>
  )
}

export default AddUserForm