import { useState } from "react"

function Form() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setError(
            firstName === ""? "First name is required" : 
            lastName === ""? "Last name is required" : 
            email === ""? "Email is required" : 
            password === ""? "Password is required" : ""
        )
        console.log(firstName, lastName, email, password);
    }
    return (
        <>

    <form onSubmit={handleSubmit}>
        
                <p>{error}</p>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <button type="submit">Submit</button>
          
          


        
          
        </form>
    
              

        </>
  )
}

export default Form