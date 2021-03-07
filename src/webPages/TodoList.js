import React, { useState } from 'react';
import {
        toDoTitle,
        } from './contentMaster/PageContents.js';

import ToDoForm from './todoComponents/todoForm.js';
import TodoListing from './todoComponents/todoListing.js';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    return (
        
        <div className="font-body bg-body-lightGray m-6 shadow-xl">

            <div className="px-5 md:px-40 py-3">

                <h1 className="text-xl p-3 text-center">
                    {toDoTitle}
                </h1>

                <ToDoForm 
                    saveToDo={todoText => {
                        const trimmedText = todoText.trim();

                        if (trimmedText.length > 0) {
                            setTodos([...todos, trimmedText]);
                        };
                    }}
                />

                <TodoListing 
                    todos={todos}
                    deleteTodo={todoIndex => {
                        const newTodos = todos.filter((_, index) => index !== todoIndex);

                        setTodos(newTodos);
                    }}
                />

            </div>
            
        </div>
    );
}

export default TodoList;