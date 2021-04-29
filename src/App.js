import logo from './logo.svg';
import './App.css';
import React from 'react'

export default function App() {
  const [todos, setTodos] = React.useState([
    { id:1, text:'Practice guitar', done:false },
    { id:2, text:'Read book', done: false },
    { id:3, text:'Cook dinner', done: false }
  ])
  const [todonts, setTodont] = React.useState([
    { id:1, text:'Check social media', done:false },
    { id:2, text:'Stay up too late', done:false },
    { id:3, text:'Eat all the carbs', done:false }
  ])
  return (
    <div className="App">
      <div className="Todo-module">
        <h1 className="Todo-heading">ToDo List</h1>
          <ToDoList  todos={todos}/>
          <AddToDo setTodos={setTodos} />
      </div>
      <div className="Todont-module">
        <h1 className="Todont-heading">ToDon't List</h1>
          <ToDontList  todonts={todonts} />
          <AddToDont setTodont={setTodont} />
      </div>
    </div>
  );
}

function AddToDo( {setTodos} ) {
  function handleAddTodo(event) {
    //by default, the React refreshes page w/onSubmit - this prevents that
    event.preventDefault()
    //see all the elements submitted by onSubmit - console.log(event.target.elements)
    //get the text entered into <input> - console.log(event.target.elements.newTodo.value)
    const todoText = event.target.elements.newTodo.value
    const todo = {
      id: 4,
      text: todoText,
      done: false 
    }
    setTodos(prevTodos => {
      return prevTodos.concat(todo)
    })
    console.log(todo)
  }
  return(
    <form onSubmit={handleAddTodo}>
      <input 
        name="newTodo" 
        placeholder="Add your todos here">
        </input>
      <button 
        type="submit">Add a ToDo
        </button>
    </form>
  )
}

function ToDoList( {todos}) {
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <li key={todo.id}>Todo: {todo.text}</li>
      ))}
    </ul>
  )
}

function AddToDont( {setTodont} ) {
  function handleAddTodont(event) {
    event.preventDefault()
    const todontText = event.target.elements.newTodont.value
    const todont = {
      id: 4,
      text: todontText,
      done: false
    }
    setTodont(prevTodont => {
      return prevTodont.concat(todont)
    })
  }
  return(
    <form onSubmit={handleAddTodont}>
      <input 
        name="newTodont" 
        placeholder="Add your unproductive tasks here">
        </input>
      <button 
        type="submit">Add something to AVOID</button>
    </form>
  )
}

//! With destructuring to reduce typing "props" for properties
function ToDontList( {todonts} ) {
  return (
    <ul className="TodontList">
      {todonts.map(todont => (
        <li key={todont.id}>ToDon't: {todont.text}</li>
      ))}
    </ul>
  )
}


