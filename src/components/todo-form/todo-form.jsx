/* eslint-disable no-lone-blocks */
import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';
import { expUserLevel } from "../../utils/index";

export const TodoForm = () => {
  const { todos, setTodos, selectedExpDropDownValue } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    {selectedExpDropDownValue === expUserLevel.expert || selectedExpDropDownValue === expUserLevel.intermediate ? checkValidationWithSpace() : checkValidationWithoutSpace() }
  };

  const checkValidationWithSpace = () => {
    if (task.length > 0  && task.match(/[a-z]/i)) {
      setTodos([
        ...todos,
        {
          id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
          label: task,
          checked: false,
        },
      ]);
      setTask('');
    }
  }
  const checkValidationWithoutSpace = () => {
    if (task) {
      setTodos([
        ...todos,
        {
          id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
          label: task,
          checked: false,
        },
      ]);
      setTask('');
    }
  }
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
        onK
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
