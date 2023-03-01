import React from 'react';
import TodoItem from './TodoItem';
import { useState } from 'react';

export default function TodoList({todos, onComplete, onDeleteItem}) {
  return (
    <div>
        {
            todos.map((todo, index) => (
                <TodoItem key={`todo-${index}`}todo= {todo} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
                // return <div>{todo.task}</div>

            ))
        }
      
    </div>
  )
}
