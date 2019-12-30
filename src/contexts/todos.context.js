import React, { createContext, useReducer } from 'react';
import useTodoState from '../hooks/useTodoState';
import toDoReducer from '../reducers/todo.reducer';

const defaultTodos = [{ id: 1, task: 'Clean house', completed: false }];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(toDoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
