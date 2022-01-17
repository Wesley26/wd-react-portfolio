import { FC, useState } from 'react';
import PageContents from '../contentMaster/PageContents';

import { TextField } from '@mui/material';

/**
 *  Component to add todos to the list.
 */

interface TODOFORM {
    saveTodo: (value: string) => void,
}

const TodoForm:FC<TODOFORM> = (props:TODOFORM) => {

    const pageContents = PageContents();
    const [value, setValue] = useState('');

    return (

        <div>

            <form
                onSubmit={e => {
                    e.preventDefault();
                    props.saveTodo(value);
                    setValue('');
                }}
            >

                <TextField 
                    variant="outlined"
                    placeholder={pageContents.placeholderToDoItemText}
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