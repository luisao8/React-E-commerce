import './App.css';
import TodoList from './Components/TodoList';
import data from './data.json';
import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';

function App() {

  const [todos, setTodos] = useState(data);
  const onComplete = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
    }))
  }

  const onDeleteItem = (id) => {
    setTodos(
      [...todos].filter(todo => todo.id !== id)
    )
  }

  const addTodo = (newTodo) => {
    let newItem = {
      id: +new Date(),
      task: newTodo,
      completed: false
    };

    setTodos(
      [...todos, newItem]
    )
  }
 
  return (
    <div className="container">
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem}/>

    </div>
  );
}

export default App;
