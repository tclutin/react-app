import styled from 'styled-components';
import {Priority} from "../../data/entity/TodoItem";

const Root = styled.div(props => {
  let borderColor;
  switch (props.priority) {
    case Priority.LOW:
      borderColor = '#77d16c';
      break;
    case Priority.MEDIUM:
      borderColor = '#f7c100';
      break;
    case Priority.HIGH:
      borderColor = '#f75e5e';
      break;
    default:
      borderColor = '#767676';
  }
  return `display: flex;
  gap: 9px;
  align-items: center;
  padding: 10px;
  border-radius: 25px;
  border: 2px solid ${borderColor};
  `
});


export const TodoItemContainer = ({children, priority}) => {
  return <Root priority={priority}>{children}</Root>
}