import React, { memo } from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} key={todo.id} />
      ))}
    </TodoListWrapper>
  );
};

export default memo(TodoList);

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
