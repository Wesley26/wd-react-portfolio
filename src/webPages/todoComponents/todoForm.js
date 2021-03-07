import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

/**
 *  Component to add todos to the list.
 */

const TodoForm = ({ saveToDo }) => {

    const [value, setValue] = useState('');

    return (

        <div>

            <form
                onSubmit={e => {
                    e.preventDefault();
                    saveToDo(value);
                    setValue('');
                }}
            >

                <TextField 
                    variant="outlined"
                    placeholder="Add todo"
                    margin="normal"
                    onChange={e => {
                        setValue(e.target.value);
                    }}
                    value={value}
                />

            </form> 
            
        </div>

    );
}

export default TodoForm;