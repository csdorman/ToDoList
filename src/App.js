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
        <AddToDo />
      <h1>ToDon't List</h1>
        <ToDontList todonts={todonts} />
        <AddToDont />
    </div>
  );
}

function AddToDo() {
  return(
    <form>
      <input placeholder="Add your todos here"></input>
      <button type="submit">Add a ToDo</button>
    </form>
  )
}

function ToDoList(props) {
  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>Todo: {todo.text}</li>
      ))}
    </ul>
  )
}

function AddToDont() {
  return(
    <form>
      <input placeholder="Add your unproductive tasks here"></input>
      <button type="submit">Add something to AVOID</button>
    </form>
  )
}

//! With destructuring to reduce typing "props" for properties
function ToDontList( {todonts} ) {
  return (
    <ul>
      {todonts.map(todont => (
        <li key={todont.id}>ToDon't: {todont.text}</li>
      ))}
    </ul>
  )
}

export default App;
