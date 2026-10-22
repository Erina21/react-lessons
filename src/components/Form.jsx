import { useState } from "react"

function Form() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(firstName, lastName, email, password);
    }
  return (
    <form onSubmit={handleSubmit}>
          <input type="text" value={firstName}
              onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" value={lastName}
              
              onChange={(e) => setLastName(e.target.value)} />
          <input type="email" value={email} 
              onChange={(e) => setEmail(e.target.value)} />
          <input type="password" value={password} 
              onChange={(e) => setPassword(e.target.value)} />
          
          <button type="submit">Submit</button>
          
          //when the form is submitted push data to the website
<p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>

        
          
      </form>
      
      
  )
}

export default Form