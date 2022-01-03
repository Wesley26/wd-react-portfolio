import { FC } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>

            </ListItem>

        ))}
    </List>

);

export default TodoListing;