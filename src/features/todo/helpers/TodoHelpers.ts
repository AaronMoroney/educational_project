import { nanoid } from "nanoid";
//types
import { Todo } from '../../../shared/types/types'

export const createNewTodo = (label: string): Todo => (
  console.log('createNewTodo', label), //working
  { 
  id: nanoid(),
  label: label,
  completed: false,
})

export const editTodo = (editedTodo: Todo,  newLabel: string): Todo => ({ 
  id: editedTodo.id,
  label: newLabel,
  completed: editedTodo.completed,
})

export const removeTodo = (entities: Todo[], todoId: string): Todo[] => {
  return entities.filter(todo => todo.id !== todoId);
};

// export const toggleTodo = (entities: Record<string, Todo>, todoId: string): Record<string, Todo> => {
//   console.log('toggleTodo', entities[todoId].completed);
//   const newEntities = { ...entities, 
//     //toggle the completed property of the todo to the opposite of what it currently is
//     [todoId]: { ...entities[todoId], completed: !entities[todoId].completed } 
//   };
//   return newEntities;
// }

export const toggleTodo = (entities: Todo[], todoId: string): Todo[] => {
  return entities.map(entitie => {
    if (entitie.id === todoId) {
      return { ...entitie, 
        completed: !entitie.completed 
        // completed: entitie.completed === false ? true : false
      };
    }
    return entitie;
  })
}

export const filterTodos = (entities: Record<string, Todo>, isActiveFilter: string): Todo[] => {//explicity define the return type as Todo[]
  const todos = Object.values(entities); //same time complexity as before

  const filteredList = todos.filter(todo => {
    switch (isActiveFilter) {
      case 'completed':
        return todo.completed 
      case 'active':
        return !todo.completed;
      default:
        return true;
    }
  });
  return filteredList;
};

export const fetchStoredTodo = (): Record<string, Todo> => {
  const storedTodos = localStorage.getItem("entities");
  if (storedTodos) {
    try {
      return JSON.parse(storedTodos); 
    } catch (error) {
      console.error(error);
    }
  }
 return {}; 
};