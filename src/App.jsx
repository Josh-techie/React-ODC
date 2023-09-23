// App.jsx
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Laundry', completed: false },
    { id: 2, text: 'Get Groceries', completed: false },
  ]);
  const [inputText, setInputText] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState('');

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

  const editTodo = (id) => {
    setEditingTask(id);
    setEditText('');
  };

  const saveEdit = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editText } : todo
    );
    setTodos(updatedTodos);
    setEditingTask(null);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

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
    <p className="text-center text-gray-500">
      You Don't Have To Do's For The Day 😥
    </p>
  ) : (
    todos.map((todo, index) => (
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
        <span className="text-gray-400 text-sm mr-2">
          <b>{index + 1}</b>
        </span>

        {editingTask === todo.id ? (
          <>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-grow rounded-md border border-blue-300 px-2 py-1 mr-2 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={() => saveEdit(todo.id)}
              className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none mr-2"
            >
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <span
              className={`flex-grow ${
                todo.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {todo.text}
            </span>
            <div className="flex items-center">
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-2 py-1 bg-red-500 text-white font-bold hover:scale-105 hover:bg-red-700 mr-2 rounded-lg focus:outline-none"
              >
                Delete
              </button>
              <button
                onClick={() => editTodo(todo.id)}
                className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none font-bold mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`px-2 py-1 ${
                  todo.completed
                    ? 'bg-orange-400 text-white font-bold hover:scale-105 hover:bg-orange-500 '
                    : 'bg-green-500 text-white transform hover:scale-105 font-bold hover:bg-green-600'
                    
                } rounded-md focus:outline-none`}
              >
                {todo.completed ? 'Undo' : 'Completed'}
              </button>
            </div>
          </>
        )}
      </li>
    ))
  )}
</ul>
      </div>
    </div>
  );
}

export default App;