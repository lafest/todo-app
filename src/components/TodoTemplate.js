import React from 'react';
import styled from 'styled-components';

export const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateWrapper>
      <AppTitle>schedule todo</AppTitle>
      <Content>{children}</Content>
    </TodoTemplateWrapper>
  );
};

const TodoTemplateWrapper = styled.div`
  width: 512px;
  margin: 6rem auto 0 auto;
  border-radius: 4px;
  overflow: hidden;
`;

const AppTitle = styled.div`
  background: skyblue;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center; //위아래 정렬
  justify-content: center; //옆으로 정렬
`

const Content = styled.div`
  background: white;
`