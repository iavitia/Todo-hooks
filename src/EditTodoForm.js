import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/todos.context';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, task, toggle }) {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: 'EDIT', id: id, newTask: value });
        reset();
        toggle();
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
