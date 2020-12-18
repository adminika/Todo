import React from 'react';
import styled from '@emotion/styled';


const ItemStatusFilter = () => {
  return (

    <Flex>
      <StyleButton type="button" active>All</StyleButton>
      <StyleButton type="button">Active</StyleButton>
      <StyleButton type="button">Done</StyleButton>
    </Flex>

  );
};

const Flex = styled.div`
  display: flex;
  margin-left: -5px;

  & > button {
    margin-left: 5px;
  }
`

const StyleButton = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: ${props => props.active ? '#60f' : '#34495e'};
  color: #fff;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0px 0px 5px 2px rgba(36, 2, 52, 0.3);
  }
`

export default ItemStatusFilter;