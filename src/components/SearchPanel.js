import React from 'react';
import styled from '@emotion/styled';

import ItemStatusFilter from './ItemStatusFilter';


const SearchPanel = () => {
  return (
    <Flex>
      <InputStyle type="text" placeholder="search" />
      <ItemStatusFilter />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;

  & > input {
    width: 100%;
    margin-right: 10px;
  }
`

const InputStyle = styled.input `
  color: red;
`

export default SearchPanel;