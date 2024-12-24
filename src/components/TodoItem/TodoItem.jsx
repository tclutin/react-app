import React from 'react';
import styled, { css } from "styled-components"
import {TodoItemContainer} from './TodoItemContainer'
import {TodoItemCheckbox} from './TodoItemCheckbox';
import {useDeleteTodoItem, useUpdateTodoItem} from "../../data/hooks/useData";
import {TodoItemPriority} from "./TodoItemPriority";

const checkedCss = css`
  color: #B5B5BA;
  text-decoration: line-through;
`

const Title = styled.div(props => {
  return `
    max-width: 40%;
    font-size: 15px;
    word-wrap: break-word;
    ${props.checked ? checkedCss : ''};
  `;
})

const Delete = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-image: url(assets/images/png/delete.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 13px;
  cursor: pointer;
`;

export const TodoItem = ({title, checked, id, priority}) => {
    const { mutate } = useDeleteTodoItem();
    const onClickHandler = () => {
        if (window.confirm(`Удалить элемент?`)) {
            mutate({ id });
        }
    }

  return (
    <TodoItemContainer>
      <TodoItemCheckbox checked={checked} disabled={false} id={id} priority={priority}/>
      <Title checked={checked}>
        {title}
      </Title>
      <Delete onClick={onClickHandler}/>
        <TodoItemPriority id={id} priority={priority} disabled={checked}/>
    </TodoItemContainer>
  )
}
