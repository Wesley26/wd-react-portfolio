import { FC, useEffect, useState } from 'react';
import PageContents from './contentMaster/PageContents';

import ToDoForm from './todoComponents/todoForm';
import TodoListing from './todoComponents/todoListing';

const TodoList:FC = () => {

    const pageContents = PageContents();
    const [todos, setTodos] = useState<any>([]);
    const [todosMem, setTodosMem] = useState<any>([]);

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
        
        <div className="font-body bg-body_lightGray m-6 shadow-xl">

            <div className="px-5 md:px-40 py-3">

                <h1 className="text-xl p-3 text-center">
                    {pageContents.toDoTitle}
                </h1>

                <h3 className="text-md p-3 text-center">
                    {pageContents.storageText}{localStorage.getItem('rememberTodo')}
                </h3>

                <ToDoForm 
                    saveTodo={(todoText: any) => {

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
                    deleteTodo={(todoIndex: any) => {
                        const newTodos = todos.filter((_: any, index: any) => index !== todoIndex);

                        setTodos(newTodos);
                    }}
                />

            </div>
            
        </div>
    );
}

export default TodoList;