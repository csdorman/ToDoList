import logo from './logo.svg';
import './App.css';
import React from 'react'

export default function App() {
  const [todos, setTodos] = React.useState([
    { id:1, text:'Practice guitar', done:false },
    { id:2, text:'Read book', done: false },
    { id:3, text:'Cook dinner', done: false }
  ])
  const [todonts, setTodonts] = React.useState([
    { id:4, text:'Check social media', done:false },
    { id:5, text:'Stay up too late', done:false },
    { id:6, text:'Eat all the carbs', done:false }
  ])
  return (
    <div className="App">
      <div className="Todo-module">
        <h1 className="Todo-heading">ToDo List</h1>
          <ToDoList  setTodos={setTodos} todos={todos}/>
          <AddToDo setTodos={setTodos} />
      </div>
      <div className="Todont-module">
        <h1 className="Todont-heading">ToDon't List</h1>
          <ToDontList  setTodonts={setTodonts} todonts={todonts} />
          <AddToDont setTodonts={setTodonts} />
      </div>
    </div>
  );
}

function AddToDo( { setTodos } ) {
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

function DeleteTodo( {todo, setTodos}) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Are you sure you want to delete this?")
      if (confirmed) {
        setTodos((prevTodos) => {
          console.log(prevTodos.filter((t) => t.id !== todo.id))
          return prevTodos.filter((t) => t.id !== todo.id)
        })
      }
  }
  return (
    //! To get non-btn to function as button, must add "role=button" to html
    <span 
      role="button"
      onClick={handleDeleteTodo}
      style= {{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        textDecoration: 'none',
        cursor: "pointer"
      }}
      >X DEL
      </span>
  )
}
//! With destructuring to reduce typing "props" for properties
function ToDoList( { todos, setTodos } ) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id 
        ? {
            ...t, 
            done: !t.done
          } 
        : t
    )
    //console.log(setTodos())
    setTodos(updatedTodos)
  }
  if (!todos.length) {
    return <p>Nothing left to do!</p>
  }
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <li
          onDoubleClick= {() => handleToggleTodo(todo)}
          style={{textDecoration: todo.done ? "line-through" : "none"}} 
          key={todo.id}>
          Todo: {todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos} />
          </li>
      ))}
    </ul>
  )
}

function AddToDont( {setTodonts} ) {
  const inputRef = React.useRef()
  function handleAddTodont(event) {
    event.preventDefault()
    const todontText = event.target.elements.newTodont.value
    const todont = {
      id: Math.random(),
      text: todontText,
      done: false
    }
    setTodonts(prevTodonts => {
      return prevTodonts.concat(todont)
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

function DeleteTodont( {todont, setTodonts }) {
  function handleDeleteTodont() {
    const confirmed = window.confirm("Don't do it!")
    if (confirmed) {
      setTodonts((prevTodonts) => {
        console.log(prevTodonts.filter((t => t.id !== todont.id)))
        return prevTodonts.filter((t) => t.id !== todont.id)
      })
    }
  }
  return (
    <span
      role="button"
      onClick={handleDeleteTodont}
      style= {{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        textDecoration: 'none',
        cursor: "pointer"
      }}
      >X DEL
      </span>
  )
}
//! With destructuring to reduce typing "props" for properties
function ToDontList( {todonts, setTodonts } ) {
  function handleToggleTodont(todont) {
    const updatedTodonts = todonts.map((t) => 
      t.id === todont.id
        ? {
            ...t,
            done: !t.done
          }
        : t
    )
    setTodonts(updatedTodonts)        
  }
  return (
    <ul className="TodontList">
      {todonts.map((todont) => (
        <li
          onDoubleClick= {() => handleToggleTodont(todont)}
          style={{textDecoration: todont.done ? 
            "line-through"  : "none"}} 
          key={todont.id}>
        ToDon't: {todont.text}
        <DeleteTodont todont={todont} setTodonts={setTodonts} />
        </li>
      ))}
    </ul>
  )
}



