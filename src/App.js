import React from 'react';
import styled from '@emotion/styled';


import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';

const todoData = [
  {task: 'Построить массив', important: true, id: 1},
  {task: 'Построить данные', important: false, id: 2},
  {task: 'Настройка массива', important: true, id: 3},
  {task: 'Научиться React', important: false, id: 4},
  {task: 'Допить чай', important: true, id: 5},
  {task: 'Привет работник', important: false, id: 6},

];

const App = () => {
  return (
    <Wrapper>
      <AppHeader />
      <BoxInner>
        <SearchPanel />
        <TodoList todos = { todoData } />
      </BoxInner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BoxInner = styled.div`
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
  align-items: center;
`

export default App;