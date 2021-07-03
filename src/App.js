import React, { useState, useEffect} from 'react';
import './App.css';

//Importing Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  //states stuff
  const [inputText, setInputText] = useState("");
  const [toDos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredtodos] = useState([]);
  //Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  //USE EFFECT

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [toDos, status]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredtodos(toDos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredtodos(toDos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredtodos(toDos);
        break;
    }
  };

  //SAVE TO LOCAL
  const saveLocalTodos = () => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("toDos") === null) {
      localStorage.setItem("toDos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("toDos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Tatiana's To Do List!</h1>
      </header>
      <Form 
        inputText={inputText} 
        toDos={toDos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList 
        setTodos={setTodos} 
        toDos={toDos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
