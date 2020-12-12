import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

export const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
