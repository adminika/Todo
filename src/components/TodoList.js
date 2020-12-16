import React from 'react';
import styled from '@emotion/styled';


const TodoList = () => {
  return (
    <List>
      <li>Учим React</li>
      <li>Пьём чай</li>
      <li>Обедаем</li>
    </List>
  );
};

const List = styled.ul`
  list-style: none;
`

export default TodoList;