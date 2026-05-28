import Welcome from "./components/Welcome"
import Profile from "./components/Profile"
import Goal from "./components/Goal"

function App() {
  return (
    <div>
      <h1>React Props Demo</h1>

      <Welcome name="Siddhi" />
      <Welcome name="React Learner" />

      <Profile
        name="Siddhi Mane"
        role="Future Full Stack Developer"
      />

      <Goal company = "Google" package = "20 LPA"/>
    </div>
  )
}

export default App