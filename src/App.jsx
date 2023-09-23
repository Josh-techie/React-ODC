// App.jsx
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Laundry', completed: false },
    { id: 2, text: 'Get Groceries', completed: false },
  ]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        text: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

// ... (Previous code)

// ... (Previous code)

return (
  <div className="bg-blue-200 min-h-screen py-8">
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
      <h1 className="text-2xl font-semibold text-center text-blue-800">
        To Do List
      </h1>
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="Add a new task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full px-3 py-2 mr-2 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">You Don't Have To Do's For The Day 😥</p>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center py-2 border-b border-blue-300"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2 text-green-500"
              />
              <span
                className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-violet-600 hover:text-violet-800 transform hover:scale-105 focus:outline-none bg-violet-300 font-bold hover:bg-violet-500 rounded-lg"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  </div>
);
}

export default App;