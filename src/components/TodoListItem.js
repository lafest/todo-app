import React from 'react';
import styled from 'styled-components';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md';

export const TodoListItem = () => {
  return (
    <TodoListItemWrapper>
      <CheckBox checked={false}>
        <MdCheckBoxOutlineBlank />
        <Text checked={false}>Todo</Text>
      </CheckBox>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
};

const TodoListItemWrapper = styled.div`
  padding: 1rem; // 모든 방향에 1rem(글자하나크기)만큼 안쪽간격을 줌
  display: flex; // 컴포넌트들이 가로로 이어지게 해줌
  align-items: center; // 위아래 중앙정렬
  :nth-child(even) {
    // 짝수번째 자식에 대한 속성을 따로 정의
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const CheckBox = styled.div`
  flex: 1; // 늘어날 수 있는대로 최대한 늘어남(flex-grow)
  display: flex;
  align-items: center; // 세로 중앙 정렬
  svg {
    // Checkbox컴포넌트의 자식들 중 svg컴포넌트에게 스타일 적용
    cursor: pointer; // 커서 올리면 포인터 모양 나옴
    color: ${(props) => (props.checked ? '#22b8cf' : 'none')};
    font-size: 1.5rem; // 최상위 기본 폰트크기의 1.5배를 적용 / em은 바로 윗부모의 1.5배, rem은 최상위 부모의 1.5배
  }
`;

const Text = styled.div`
  margin-left: 0.5rem; // 최상위 부모의 기본 폰트크기의 0.5배만큼 왼쪽에 빈 공간을 띄워줌
  flex: 1; // 같은 단계의 자식들이 각자의 크기를 가진 후, 나머지 공간을 모두 차지하게 됨
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  :hover {
    color: #ff8787;
  }
`;
