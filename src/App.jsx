import Counter from './components/Counter'
import CourseCard from './components/CourseCard'
import Post from './components/Post'
import ProfileCard from './components/ProfileCard'
import StudentCard from './components/StudentCard'
import Product from './components/Product'
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
      <ProfileCard name="arber" age={17} city="Vushtrri" />
      <ProfileCard name="olsa" age={17} city="Prishtina" />
      <ProfileCard name="dorina" age={17} city="Prishtina" />
      <CourseCard name="React Basics" instructor="John Doe" duration="4 weeks" />
      <CourseCard name="HTML Basics" instructor="Jane Smith" duration="3 weeks" />
      <CourseCard name="JavaScript Basics" instructor="Alice Johnson" duration="5 weeks" />
      <Counter />
      <Post />
      <StudentCard name="erina" course="React Basics" />
      <StudentCard name="arber" course="HTML Basics" />
      <StudentCard name="olsa" course="JavaScript Basics" />
      <StudentCard name="dorina" course="React Basics" />
      <Product name="Laptop" price={20} />
      <Product name="Smartphone" price={15} />
      <Product name="Tablet" price={10} />
    </>
  )
}

export default App
