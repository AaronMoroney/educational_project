/* eslint-disable react-refresh/only-export-components */
import {FC, memo} from 'react';
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { Todo } from '../../../shared/types/types'

interface TodoItemProps {
    onToggle: (todo: Todo) => void;
    onRemove: (todo: Todo) => void;
    onOpen: (todo: Todo) => void;
    todo: Todo;
}

const TodoItem: FC<TodoItemProps> = function TodoItem({todo, onRemove, onToggle, onOpen}) {

    // const todoKey = Object.keys(todo)[0];
    // const { label, completed } = todo[todoKey];

    const handleToggle = () => {
        onToggle(todo);
    };
    const handleRemove = () => {
        onRemove(todo);
    };
    const handleOpen = () => {
        onOpen(todo);
    }

    return (
        <ListItem  disablePadding
            secondaryAction={
                <Stack direction="row" spacing={1}>
                    <IconButton edge="end" onClick={handleOpen}>
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={handleRemove}>
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            }
        >
            <ListItemButton onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText
                    sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
                    primary={todo.label}
                />
            </ListItemButton>
        </ListItem>
    )
}
//skips rerendering when props and state are the same
export default memo(TodoItem);