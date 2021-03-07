import React, { useState } from 'react';
import { placeholderToDoItemText } from '../../webPages/contentMaster/PageContents.js'


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
                    placeholder={placeholderToDoItemText}
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