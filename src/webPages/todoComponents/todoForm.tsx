import { FC, useState } from 'react';
import { TODOFORM } from '../../globalTypes/interfaces/otherInterfaces/TodoForm';
import PageContents from '../contentMaster/PageContents';

import TextField from '@mui/material/TextField';

/**
 *  Component to add todos to the list.
 */

const TodoForm:FC<TODOFORM> = (props:TODOFORM) => {

    const pageContents = PageContents();
    const [value, setValue] = useState<string>('');

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