import React, {useState} from 'react';
import {TodoItemsContainer} from './TodoItemsContainer';
import {NewTodoItem} from '../TodoItem/NewTodoItem';
import {TodoItem} from '../TodoItem/TodoItem';
import {useData} from '../../data/hooks/useData';
import {SearchInput} from './components/SearchInput';
import {SelectPriority} from "./components/SelectPriority";

export const TodoItems = () => {
  const [searchValue, setSearchValue] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('Все');

  const {data: todoItems, isLoading} = useData();

  if (!todoItems || isLoading) {
    return (
      <TodoItemsContainer>
        Загрузка данных...
      </TodoItemsContainer>
    );
  }

  const filteredBySearchItems = todoItems.filter((todoItem) => {
    const clearedTodoItemTitle = todoItem.title.trim().toLowerCase();
    const clearedSearchValue = searchValue.trim().toLowerCase();
    const isSearched = clearedTodoItemTitle.includes(clearedSearchValue);
    return isSearched;
  })

  const filteredByPriorityItems = filteredBySearchItems.filter((todoItem) => {
    if (priorityFilter === 'Все') {
      return true;
    }
    return todoItem.priority === priorityFilter;
  });


  const todoItemsElements = filteredByPriorityItems.map((item, index) => {
    return <TodoItem key={item.id} id={item.id} title={item.title} checked={item.isDone} priority={item.priority}/>;
  });

  return (
    <TodoItemsContainer>
      <SearchInput value={searchValue} setValue={setSearchValue}/>
      <SelectPriority value={priorityFilter} setValue={setPriorityFilter}/>
      {todoItemsElements}
      <NewTodoItem />
    </TodoItemsContainer>
  )
}