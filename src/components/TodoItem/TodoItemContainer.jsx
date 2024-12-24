import styled from 'styled-components';
import {Priority} from "../../data/entity/TodoItem";

const Root = styled.div(props => {
  let borderColor;
  switch (props.priority) {
    case 'Низкий':
      borderColor = '#77d16c';
      break;
    case 'Средний':
      borderColor = '#f7c100';
      break;
    case 'Высокий':
      borderColor = '#f75e5e';
      break;
    default:
      borderColor = '#77d16c';
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