import { useCallback, useMemo } from 'react';
import { Todo } from '../../../shared/types/types';
import type { AppDispatch, RootState } from '../../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal, setEditingTodo,  editEntitie, toggleEntitie } from '../TodosSlice';
import { postTodo, deleteTodo} from '../TodosAPI';

export function useTodos() {
  const entities = useSelector((state: RootState) => state.todosState.entities);
  const editing = useSelector((state: RootState) => state.todosState.todoToEdit);
  const open = useSelector((state: RootState) => state.todosState.open);
  const dispatch = useDispatch<AppDispatch>();
  
  const onCreate = useCallback((label: string) => {
    dispatch(postTodo(label));
  }, []); 

  const onRemove = useCallback((todo: Todo) => {
    dispatch(deleteTodo(todo.id));
  }, []); 

  const onToggle = useCallback((todo: Todo) => {
    dispatch(toggleEntitie(todo.id)); //working
  }, []);

  const onEdit = useCallback((todo: Todo, newLabel: string) => {
    dispatch(editEntitie({ id: todo.id, newLabel }));
  }, []); 

  const onOpen = useCallback((todo: Todo) => {
    dispatch(setEditingTodo(todo));
    dispatch(openModal());
  }, []);

  const onClose = useCallback(() => {
    dispatch(setEditingTodo(null));
    dispatch(closeModal());
  }, []); 
  
  return useMemo(
    () => ({
      open,
      editing,
      entities,
      setEditingTodo,
      onToggle,
      onRemove,
      onCreate,
      onEdit,
      onOpen,
      onClose
    }),
    [ onToggle, onRemove, onCreate, onEdit, onOpen, onClose, setEditingTodo, entities, open, editing ]
  );
}