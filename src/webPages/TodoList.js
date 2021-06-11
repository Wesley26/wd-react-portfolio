import React, { useEffect, useState } from 'react';
import {
        toDoTitle,
        storageText,
        } from './contentMaster/PageContents.js';

import ToDoForm from './todoComponents/todoForm.js';
import TodoListing from './todoComponents/todoListing.js';

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [todosMem, setTodosMem] = useState([]);

    useEffect(() => {

        localStorage.setItem('rememberTodo', todos);

        let memoryTodo = localStorage.getItem('rememberTodo');
        //console.log(memoryTodo); //uncomment to see localStorage in action

        if (memoryTodo) {
            setTodosMem(memoryTodo);
        };

    }, [todos]);

    console.log(todosMem); //uncomment to see localStorage in action

    return (
        
        <div className="font-body bg-body-lightGray m-6 shadow-xl">

            <div className="px-5 md:px-40 py-3">

                <h1 className="text-xl p-3 text-center">
                    {toDoTitle}
                </h1>

                <h3 className="text-md p-3 text-center">
                    {storageText}{localStorage.getItem('rememberTodo')}
                </h3>

                <ToDoForm 
                    saveToDo={todoText => {

                        if (todoText) {
                            /**
                             * Handle Todos from current window
                             */
                            const trimmedText = todoText.trim();

                            if (trimmedText.length > 0) {
                                setTodos([...todos, trimmedText]);
                            };
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