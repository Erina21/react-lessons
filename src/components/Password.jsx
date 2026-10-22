import React, { useState } from 'react'

function Password() {
    const [password, setPassword] = useState("")
  return (
      <div>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          <p>Password length: {password.length}</p>
<p>{password.length < 6 ? "Password is too short" : "Password is long enough"}</p>
    </div>
  )
}

export default Password