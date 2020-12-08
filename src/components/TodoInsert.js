import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

export const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue],
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value, setValue],
  );

  return (
    <TodoInsertWrapper onSubmit={onSubmit}>
      <input placeholder="write todo..." value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </TodoInsertWrapper>
  );
};

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;
  input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    ::placeholder {
      color: #dee2e6;
    }
    flex-grow: 1;
  }
  button {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding: 0 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.1s ease-in;
    :hover {
      background: #adb5bd;
    }
  }
`;
