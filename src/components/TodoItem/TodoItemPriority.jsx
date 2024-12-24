import styled from "styled-components";
import {useUpdateTodoItem} from "../../data/hooks/useData";
import {Priority} from "../../data/entity/TodoItem";


const PrioritySelect = styled.select`
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer;
`;


export const TodoItemPriority = ({ id, priority, disabled }) => {
    const { mutate } = useUpdateTodoItem();
    const onPriorityChange = (event) => {
        const newPriority = event.target.value;
        mutate({ id: id, priority: newPriority });
    };
    return (
        <PrioritySelect value={priority} onChange={onPriorityChange} disabled={disabled}>
            <option value={Priority.LOW}>{Priority.LOW}</option>
            <option value={Priority.MEDIUM}>{Priority.MEDIUM}</option>
            <option value={Priority.HIGH}>{Priority.HIGH}</option>
        </PrioritySelect>
    );
}