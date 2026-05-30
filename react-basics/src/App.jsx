import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Goal from "./components/Goal";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>React State Demo </h1>

      <Welcome name="Siddhi" />

      <Profile
        name="Siddhi Mane"
        role="Future Full Stack Developer"
      />

      <Goal
        company="ThoughtWorks"
        package="12 LPA"
      />

      <Counter />
    </div>
  );
}

export default App;