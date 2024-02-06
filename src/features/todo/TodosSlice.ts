import { createSlice } from '@reduxjs/toolkit';
import type { Todo } from '../../shared/types/types';
import { deleteTodo, fetchTodos, postTodo, updateTodo } from './TodosAPI';

import {
    editTodo,
    removeTodo,
    toggleTodo,
} from "./helpers/TodoHelpers";

export interface TodoState {
    open: boolean;
    todoToEdit: Todo | null;
    filter: 'all' | 'completed' | 'active';
    entities: Todo[];
    removedEntities: Record<string, Todo>;
    toggleEntities: Record<string, Todo>;
}

const initialState: TodoState = {
    open: false,
    todoToEdit: null,
    filter: 'all',
    entities: [], 
    removedEntities: {},
    toggleEntities: {},
};

export const todosSlice = createSlice({
    name: 'todosState',
    initialState,
    reducers: {
        openModal: (state) => {
            state.open = true;
        },
        closeModal: (state) => {
            state.open = false;
        },
        setEditingTodo: (state, action) => {
            state.todoToEdit = action.payload;
        },
        removeEntitie: (state, action) => {
            state.entities = removeTodo(state.entities, action.payload);
        },
        toggleEntitie: (state, action) => {
            state.entities = toggleTodo(state.entities, action.payload);
        },
        editEntitie: (state, action) => {
            const { id, newLabel } = action.payload;
            const todo = state.entities[id];
            if (todo) {
                state.entities[id] = editTodo(todo, newLabel);
            } 
        },
        filter: (state, action) => {
            state.filter = action.payload;
        }, 
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.entities = action.payload;
            console.log('state.entities', state.entities); //working
        });
        builder.addCase(postTodo.fulfilled, (state, action) => {
            const newTodo = action.payload;
            state.entities.push(newTodo);
        });
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
           state.entities = removeTodo(state.entities, action.payload);
        });
    },
});

export const { openModal, closeModal, setEditingTodo, filter,  editEntitie, removeEntitie, toggleEntitie   } = todosSlice.actions;
export default todosSlice.reducer;