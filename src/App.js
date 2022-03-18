import react, { useEffect, useState } from "react";
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import "./App.css";
import db from "./firebae";



function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  useEffect(()=> {

  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
     <form>
      <h1>Make Your TODO</h1>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={(event) => setInput(event.target.value)} />
       
      </FormControl>
      <Button
        disabled={!input}
        type="submit"
        onClick={addTodo}
        variant="contained"
        color="primary"
      >
        Add Todo
      </Button>
      </form>

      {todos.map(todo => (
        <Todo text ={todo}/>
        // <li>{todo}</li>
      ))}
    </div>
  );
}

export default App;
