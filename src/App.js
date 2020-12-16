import React from 'react';
import styled from '@emotion/styled';


import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';






const App = () => {
  return (
    <Wrapper>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`

export default App;
