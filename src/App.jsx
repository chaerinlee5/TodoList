import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [completed, setCompleted] = useState(false);

  const addTodo = () => {
    if (input.trim()) { // if input not empty
      setTodos([...todos, {
        id: Date.now(),
        text: input, completed: false
      }]) // making copy of existing todos and adding new todo and making timestamp for uniqueness
      setInput("") // clearing input
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center 
      justify-center bg-gradient-to-r from-blue-600 to-emerald-400 ">
        <div className="bg-white shadow-lg rounded-3xl p-16">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">REACT TODO LIST</h1>
          <div className="mb-4 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)} // update current state, takes event itself and gets value from it
              type="text" placeholder="Add a new todo" className="flex-grow text-black px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500" />
            <button
              onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">Add</button>
          </div>

          <ul className="space-y-2">
            {
              todos.map((todo) => (
                <li key={todo.id} className="flex items-center p-3 rounded-lg
              bg-slate-100 border border-gray-200">
                  <input type="checkbox"
                    checked={todo.completed}
                    onChange={() => setTodos(
                      todos.map((t) => (
                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                      )) // when checkbox is checked, it will update the state of the todo, if it's not completed it becomes completed and vice versa
                    )}   className="mr-2 h-5 w-5 !accent-blue-600 bg-white"/>
                    <span className={`flex-grow ${todo.completed ? "line-through text-gray-500": "text-gray-800"}`}>{todo.text}</span>
                    <button
                    onClick={() => setTodos(todos.filter ((t) => t.id !== todo.id))}
                    className="ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg">
                    Delete</button> 
                </li> // todo element as argument and if it is not equal to the current todo id, it will be removed from the list, creates a new array with the remaining todos
              ))
            }
          </ul>

        </div>
      </div>
    </>
  )
}

export default App
