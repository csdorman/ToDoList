import logo from './logo.svg';
import './App.css';

function App() {
  const todos = [
    { id:1, text:'Practice guitar', done:false },
    { id:2, text:'Read book', done: false },
    { id:3, text:'Cook dinner', done: false }
  ]
  const todonts = [
    { id:1, text:'Check social media', done:false },
    { id:2, text:'Stay up too late', done:false },
    { id:3, text:'Eat all the carbs', done:false }
  ]
  return (
    <div className="App">
      <h1>ToDo List</h1>
        <ToDoList todos={todos}/>
      <h1>ToDon't List</h1>
        <ToDontList todonts={todonts} />
    </div>
  );
}

export default App;
