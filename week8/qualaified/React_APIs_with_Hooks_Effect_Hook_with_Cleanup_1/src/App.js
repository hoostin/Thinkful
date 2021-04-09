import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);

  // Load data from https://jsonplaceholder.typicode.com/todos?userId=3
  useEffect(() => {
    const abortController = new AbortController();
    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?userId=3",
          { signal: abortController.signal }
        );
        const responseRead = await response.json();
        setToDos(responseRead);
      } catch (error) {
        if (error.name === "AbortError") {
          // Ignore `AbortError`
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    }
    loadUsers();
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
