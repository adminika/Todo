import React from 'react';
import styled from '@emotion/styled';


const AppHeader = () => {
  return (
    <h1>My Todo App</h1>
  );
};

const AppInput = () => {
  return (
    <input type="text" placeholder="search" />
  );
};

const TodoList = () => {
  return (
    <ul>
      <li>Учим React</li>
      <li>Пьём чай</li>
      <li>Обедаем</li>
    </ul>
  );
};

const App = () => {
  return (
    <Wrapper>
      <AppHeader />
      <AppInput />
      <TodoList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  h1 {
    color: #60f;
    font-size: 2rem;
    text-align: center;
  };

  ul {
    list-style: none;
  };
`

export default App;
