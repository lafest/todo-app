import React, { useCallback, useRef, useState } from 'react';
import { TodoInsert } from './components/TodoInsert';
import { TodoList } from './components/TodoList';
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

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

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
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [setTodos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
