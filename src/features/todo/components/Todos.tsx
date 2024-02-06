import { FC, memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { filter } from "../TodosSlice";

import { useTodos } from "../hooks/useTodos";
import { filterTodos } from "../helpers/TodoHelpers";
import { fetchTodos } from "../TodosAPI";
import TodoForm from "./TodoForm"; 
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";  
import TodoCount from "./TodoCount"; 
import EditTodoModal from "./EditTodoModal"; 

const Todos: FC = memo(function Todos() {
  const { open, editing, entities, onCreate, onEdit,  onOpen, onClose,  onToggle, onRemove } = useTodos();

  const currentFilter = useSelector((state: RootState) => state.todosState.filter); //currently 'all'
  const filteredList = filterTodos(entities, currentFilter); //will remain the same until the filter changes

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]); 
  
  const handleFilterChange = (newFilter: string) => {
    dispatch(filter(newFilter));
  }; 
  
  function emptyMessage() {
    if (filteredList.length > 0) {
      return;
    } 
    if (currentFilter === 'all') {
      return 'No todos! 🎉 Hurray!';
    } else {
      return `No ${currentFilter} Todos`;
    }
  };

  return (
    <>
      <TodoForm  
        onCreate={onCreate}  
      />
      { open &&
        <EditTodoModal 
          open={open} 
          onClose={onClose}
          onEdit={onEdit}
          editing={editing}
        />
      }
      <TodoFilter 
        currentFilter={currentFilter}
        handleFilterChange={handleFilterChange}
      />
      { filteredList.length === 0 ?  
        <p>{emptyMessage()} </p> :
        <TodoList
          filteredList={filteredList} 
          onToggle={onToggle}
          onRemove={onRemove}
          onOpen={onOpen}
        /> 
       }
       <TodoCount 
        filteredList={filteredList}
        isActiveFilter={currentFilter}
      /> 
    </>
  );
});

export default Todos;