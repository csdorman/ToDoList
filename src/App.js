import logo from './logo.svg';
import './App.css';
import React from 'react'

export default function App() {
  const [todos, setTodos] = React.useState([
    { id:1, text:'Practice guitar', done:false },
    { id:2, text:'Read book', done: true },
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
  const inputRef = React.useRef()
  function handleAddTodo(event) {
    //by default, the React refreshes page w/onSubmit - this prevents that
    event.preventDefault()
    //to see all the elements submitted by onSubmit - console.log(event.target.elements)
    //to get the text entered into <input> - console.log(event.target.elements.newTodo.value)
    const todoText = event.target.elements.newTodo.value
    const todo = {
      id: Math.random(),
      text: todoText,
      done: false 
    }
    setTodos(prevTodos => {
      return prevTodos.concat(todo)
    })
    inputRef.current.value = ''
  }
  return(
    <form onSubmit={handleAddTodo}>
      <input 
        //* Name to use in handleAddTodo *//
        name="newTodo" 
        //* Ref to use to clear input *//
        ref={inputRef}
        placeholder="Add your todos here"></input>
      <button 
        type="submit">Add a ToDo</button>
    </form>
  )
}

//! With destructuring to reduce typing "props" for properties
function ToDoList( {todos, setTodos} ) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id 
        ? {
            ...t, 
            done: !t.done
          } 
        : t
      )
      console.log(setTodos())
    setTodos(updatedTodos)
    }
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <li
          onClick= {() => handleToggleTodo(todo)}
          style={{textDecoration: todo.done ? "line-through" : "underline"}} 
          key={todo.id}>
          Todo: {todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos} />
          </li>
      ))}
    </ul>
  )
}

function AddToDont( {setTodont} ) {
  const inputRef = React.useRef()
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
    inputRef.current.value = ''
  }
  return(
    <form onSubmit={handleAddTodont}>
      <input 
        name="newTodont"
        ref={inputRef}
        placeholder="Add your unproductive tasks here">
        </input>
      <button 
        type="submit">Add something to AVOID</button>
    </form>
  )
}

function DeleteTodo() {
  return (
    <span role="button"
      style= {{
        color: 'red'
      }}
      >x
      </span>
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


