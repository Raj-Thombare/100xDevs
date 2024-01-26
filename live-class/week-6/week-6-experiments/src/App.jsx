import { useState } from "react";

let counter = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to gym",
      description: "Need to hit the gym from 7-9PM",
    },
    {
      id: 2,
      title: "Go to Clas",
      description: "Need to go to the class from 4-7 PM",
    },
    {
      id: 3,
      title: "Eat foor",
      description: "Need to eat food from 2-4 PM",
    },
  ]);

  const addTodoHandler = () => {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  };
  return (
    <div>
      <button onClick={addTodoHandler}>Add a todo</button>
      {todos.map((todo) => (
        // eslint-disable-next-line react/jsx-key
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}

export default App;
