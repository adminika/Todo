import React from 'react';
import styled from '@emotion/styled';


const AppHeader = (props) => {
  return (
    <Header>
      <TitleApp>My Todo App</TitleApp>
      <InfoTodo>
        <span>3</span>more to do,
        <span>6</span>done
      </InfoTodo>
    </Header>
  );
};

const Header = styled.header `
  display: flex;
  width: 100%;
  max-width: 70%;
  align-items: center;

`

const TitleApp = styled.h1 `
  color: #60f;
  font-size: 3rem;
  margin-right: auto;
`

const InfoTodo = styled.div`
  color: #795548;

  & > span {
    margin: 0 5px;
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export default AppHeader;
