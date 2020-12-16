import React from 'react';
import styled from '@emotion/styled';


const AppHeader = () => {
  return (
    <TitleApp>My Todo App</TitleApp>
  );
};

const TitleApp = styled.h1 `
  color: #60f;
  font-size: 2rem;
  text-align: center;
`

export default AppHeader;
