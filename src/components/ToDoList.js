import React from 'react';

//Import Components
import ToDo from './ToDo';

const ToDoList = ({ toDos, setTodos, filteredTodos }) => {
    //console.log(toDos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <ToDo 
                        setTodos ={ setTodos}
                        toDos = {toDos}
                        key = {todo.id} 
                        todo = {todo}
                        text = {todo.text} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;