/* eslint-disable react-refresh/only-export-components */
import {FC, memo} from 'react';
import List from "@mui/material/List";
import TodoItem from './TodoItem';
import { Todo } from '../../../shared/types/types'

interface TodoListProps {
    filteredList: Todo[];
    onToggle: (todo: Todo) => void;
    onRemove: (todo: Todo) => void;
    onOpen: (todo: Todo) => void;
}

const TodoList: FC<TodoListProps> = function TodoList({filteredList, onToggle, onRemove, onOpen}) { 
    console.log('filteredList', filteredList);

    return (
        <List>
            {filteredList.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    onOpen={onOpen}
                />
            ))}
        </List>
    )
}
//skips rerendering when props and state are the same
export default memo(TodoList);