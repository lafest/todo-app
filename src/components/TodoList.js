import React from 'react';
import styled from 'styled-components';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
  return (
    <TodoListWrapper>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
