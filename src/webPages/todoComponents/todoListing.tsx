import { FC } from 'react';
import { TODOLISTING } from '../../globalTypes/interfaces/otherInterfaces/TodoListing';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteForever from '@mui/icons-material/DeleteForever';

/**
 * Individual todo list component. This component does not need
 * a return.
 * 
 * @todos array of todos, map over each one and create list item
 * @deleteTodo called when clicking IconButton, identify the unique
 * index to remove todo item.
 * 
 * NOTE: Import your material icons seperately, not all at once.
 * It will greatly slow down build performance otherwise.
 */

const TodoListing:FC<TODOLISTING> = (props:TODOLISTING) => (

    <List>
        {props.todos.map((todo: string, index: number) => (

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