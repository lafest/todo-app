import React, { useCallback, useReducer, useRef } from 'react';
import { TodoInsert } from './components/TodoInsert';
import TodoList from './components/TodoList';
import { TodoTemplate } from './components/TodoTemplate';

const createBulkTodos = () => {
  const array = [];
  for (let i = 0; i < 2500; i += 1) {
    array.push({
      id: i,
      text: `todo idx: ${i}`,
      checked: false,
    });
  }
  return array;
};

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'INSERT':
      // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
      return todos.concat(action.todo);
    case 'REMOVE':
      // { type: 'REMOVE', id: 1 }
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      // { type: 'REMOVE', id: 1 }
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1;
    },
    [dispatch],
  );

  const onRemove = useCallback(
    (id) => {
      dispatch({ type: 'REMOVE', id });
    },
    [dispatch],
  );

  const onToggle = useCallback(
    (id) => {
      dispatch({ type: 'TOGGLE', id });
    },
    [dispatch],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
