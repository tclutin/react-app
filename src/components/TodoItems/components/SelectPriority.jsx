import styled from "styled-components";
import {Priority} from "../../../data/entity/TodoItem";


const PrioritySelect = styled.select`
    text-align: center;
`;

export const SelectPriority = ({ value, setValue }) => {
    const onPriorityChange = (event) => {
        if (setValue) {
            setValue(event.target.value);
        }
    };
    return (
        <PrioritySelect value={value} onChange={onPriorityChange}>
            <option value="Все">Все</option>
            <option value={Priority.LOW}>{Priority.LOW}</option>
            <option value={Priority.MEDIUM}>{Priority.MEDIUM}</option>
            <option value={Priority.HIGH}>{Priority.HIGH}</option>
        </PrioritySelect>
    );
}