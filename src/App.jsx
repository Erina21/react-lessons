
const technologies =["react", "html", "javascript"]
function App() {


  return (
    <>
      {technologies.map((tech) => (
        <div key={tech}>{tech}</div>
      ))}
    </>
  )
}

export default App
