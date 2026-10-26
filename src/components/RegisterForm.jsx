import React from "react";

function RegisterForm() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [course, setCourse] = React.useState("");
    const [accept, setAccept] = React.useState(false);

     function handleSubmit(e) {
         e.preventDefault();
         
        console.log(firstName, lastName, email, password,course,accept);
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <div className="form-control">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                  />
              </div>
              <div className="form-control">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                  />
              </div>
              <div className="form-control" >
                  <label htmlFor="email">Email:</label>
                  <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="form-control">
                  <label htmlFor="password">Password:</label>
                  <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              <div className="form-control" >
                  <label htmlFor="course">Course:</label>
                  <select
                      id="course"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                  >
                      <option value="">Select a course</option>
                      <option value="course1">Course 1</option>
                      <option value="course2">Course 2</option>
                      <option value="course3">Course 3</option>
                  </select>
                  <p>Selected:{course}</p>
              </div>
              <div className="form-control">
                  <label htmlFor="accept">
                      <input
                          type="checkbox"
                          id="accept"
                          checked={accept}
                          onChange={(e) => setAccept(e.target.checked)}
                      />
                      I accept the terms and conditions
                  </label>
              </div>
              <button type="submit" disabled={
!firstName || !lastName || !email || !password || !course || !accept
              }>Register</button>
          </form>
    </div>
  )
}

export default RegisterForm