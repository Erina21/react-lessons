
const technologies = ["react", "html", "javascript"]
const students = [
  {
    id: 1,
    name: "erina",
    age: 17,
  },
  {
    id: 2,
    name: "arber",
    age: 17,
  },
  {
    id: 3,
    name: "olsa",
    age: 17,
  },
  {
    id: 4,
    name: "dorina",
    age: 17,
  },
]
function App() {


  return (
    <>
      {technologies.map((tech) => (
        <div key={tech}>{tech}</div>
      ))}
      {students.map((student) => (
        <h1 key={student.id}>{student.name},{student.age}</h1>
      ))}
    </>
  )
}

export default App
