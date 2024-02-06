import { createAsyncThunk } from '@reduxjs/toolkit';
import { createNewTodo } from './helpers/TodoHelpers';

const URL = 'http://localhost:3000/entities';

export const fetchTodos = createAsyncThunk(
  'fetchTodos',
  async () => {
    const response = await fetch(URL); 
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
  }
);

export const postTodo = createAsyncThunk(
    'postTodo',
    async (label: string) => {
      const newTodo = createNewTodo(label);
      const response = await fetch(URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newTodo)
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      return responseData;
    }
);

export const deleteTodo = createAsyncThunk(
  'removeTodo',
  async (id: string) => {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return id;
  }
);

// export const updateTodo = createAsyncThunk(
//   'updateTodo',
//   async (id: string, data) => {
//     const response = await fetch(`${URL}/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({data})
//     });
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return id;
//   }
// );