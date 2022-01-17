import { FC } from 'react';
import { 
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    IconButton,
} from '@mui/material';
import { DeleteForever } from '@mui/icons-material';

/**
 * Individual todo list component. This component does not need
 * a return.
 * 
 * @todos array of todos, map over each one and create list item
 * @deleteTodo called when clicking IconButton, identify the unique
 * index to remove todo item.
 */

interface TODOLISTING {
    todos: any,
    deleteTodo: (todoIndex: any) => void,
}

const TodoListing:FC<TODOLISTING> = (props:TODOLISTING) => (

    <List>
        {props.todos.map((todo: any, index: any) => (

            <ListItem key={index.toString()} dense button>
                <Checkbox 
                    tabIndex={-1} 
                    disableRipple 
                />
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label={`Delete`}
                        onClick={() => {
                            props.deleteTodo(index);
                        }}
                    >
                        <DeleteForever />
                    </IconButton>
                </ListItemSecondaryAction>

            </ListItem>

        ))}
    </List>

);

export default TodoListing;