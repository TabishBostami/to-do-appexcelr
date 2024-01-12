import "./App.css";
import Task from "./Components/Task";

function App() {
        const tasklist = ["Work on bug #21","Api call","Check with FE","Machine learning algo"]
  return (
    <center>
      <h1>React To-do 🌟</h1>
      <input type="text" className="inp" /> 
      <button id="add">Add</button>
      {
        tasklist.map((v,i)=> <Task key={i} data={v} /> )
      }
    </center>
  );
}

export default App;
