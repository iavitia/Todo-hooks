import React, { useContext, Fragment } from 'react';

import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { TodosContext } from './contexts/todos.context';

function Todo({ task, id, completed }) {
  const { dispatch } = useContext(TodosContext);
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggle={toggle} />
      ) : (
        <Fragment>
          <CheckBox
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({ type: 'TOGGLE', id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              area-label='Delete'
              onClick={() => dispatch({ type: 'REMOVE', id: id })}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton area-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Fragment>
      )}
    </ListItem>
  );
}

export default Todo;
