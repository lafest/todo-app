import React, { useCallback, useRef, useState } from 'react';
import { TodoInsert } from './components/TodoInsert';
import { TodoList } from './components/TodoList';
import { TodoTemplate } from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'react basic',
      checked: true,
    },
    {
      id: 2,
      text: 'component styling',
      checked: true,
    },
    {
      id: 3,
      text: 'todo app',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos((prev) => prev.concat(todo));
      nextId.current += 1;
    },
    [setTodos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    },
    [setTodos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo));
    },
    [setTodos],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
