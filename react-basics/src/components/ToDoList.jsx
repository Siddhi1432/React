function ToDoList() {
  const tasks = [
  "Master React",
  "Master MERN",
  "Get Internship",
  "Get 9-12 LPA Job",
  "Become Full Stack Developer"
];

const students = [
  {
    id: 1,
    name: "Siddhi",
    course: "MCA"
  },
  {
    id: 2,
    name: "Rahul",
    course: "BCA"
  }
];

  return (
    <div>
      <h2>My Tasks</h2>

      {tasks.map((task, index) => (
        <p key={index}>
          {index + 1}. {task}
        </p>
      ))}

      <h2>Students</h2>

      {students.map((student) => (
        <p key={student.id}>
          name = {student.name} <br /> 
          course = {student.course} <br /><br />
        </p>
      ))}


    </div>
  );
}

export default ToDoList;