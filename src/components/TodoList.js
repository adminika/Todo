import React from 'react';
import styled from '@emotion/styled';


import { BsFillTrashFill } from "react-icons/bs";
import { FaExclamation } from "react-icons/fa";

const ListItem = (props) => {

  return (
    <Item  important={props.important}>
      {props.task}
      <ButtonWrapper>
        <Button deleted> <BsFillTrashFill /> </Button>
        <Button> <FaExclamation /> </Button>
      </ButtonWrapper>
    </Item>
  );
};

const TodoList = ({todos}) => {
  
  const listItems = todos.map((todo) =>
  <ListItem key={todo.id} task={todo.task} important={todo.important}/>
  );
  
  return (
    <List>
      {listItems}
    </List>
  );
};


const List = styled.ul`
  width: 100%;
  list-style: none;
  margin: 15px 0;
`

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  margin-bottom: 3px;
  border: 1px solid #34495e;
  border-radius: 4px;
  background-color: #FAFAFA;
  color: ${props => props.important ? 'tomato' : '#000'};
  font-weight: ${props => props.important ? 'bold' : 'normal'};
`

const Button = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7em;
  margin-left: 10px;
  border: 1px solid transparent;
  border-radius: 4px;
  border-color: ${props => props.deleted ? 'red' : 'green'};
  color: ${props => props.deleted ? 'red' : 'green'};
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0px 0px 5px 2px rgba(36, 2, 52, 0.3);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-left: auto;
`

export default TodoList;