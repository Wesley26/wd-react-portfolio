import { FC, useEffect, useState } from 'react';
import PageContents from './contentMaster/PageContents';
import MainPageAnimations from './contentMaster/MainPageAnimations';
import { motion } from 'framer-motion';

import ToDoForm from './todoComponents/todoForm';
import TodoListing from './todoComponents/todoListing';

const TodoList:FC = () => {

    const pageContents = PageContents();
    const mainPageAnimations = MainPageAnimations();

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {

        setVisible(false);
        setVisible(true);

    }, []);

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

            <> { visible ? (
                <motion.div
                    initial={mainPageAnimations.initialStyle}
                    animate={mainPageAnimations.animateStyle}
                    transition={mainPageAnimations.transitionStyle}
                    className="px-5 md:px-40 py-3"
                >

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

                </motion.div>
                ) : null }
            </>
            
        </div>
    );
}

export default TodoList;