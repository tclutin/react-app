import {LocalStorage} from '../services/LocalStorage';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {Priority, TodoItem} from '../entity/TodoItem'

export const useData = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['todo'],
    queryFn: LocalStorage.getTodoItemsFromLocalStorage,
  });

  return {
    data,
    isLoading,
  };
}

export const useSaveNewTodoItem = () => {
  const client = useQueryClient();

  const {mutate, isPending, isSuccess} = useMutation({
    mutationFn: ({title}) => {
      const newTodoItem = new TodoItem(new Date().getTime(), title, false, Priority.LOW);
      return LocalStorage.saveTodoItemToLocalStorage(newTodoItem)
    },
    onSuccess: () => {
      client.invalidateQueries(['todo']);
    },
  });

  return {
    mutate,
    isPending,
    isSuccess
  }
}

export const useUpdateTodoItem = () => {
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ id, checked, priority }) => {
      return LocalStorage.updateTodoItemInLocalStorage(id, checked, priority);
    },
    onSuccess: () => {
      client.invalidateQueries(['todo']);
    },
  });

  return {
    mutate
  }
}

export const useDeleteTodoItem = () => {
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ id }) => {
      return LocalStorage.deleteTodoItemFromLocalStorage(id);
    },
    onSuccess: () => {
      client.invalidateQueries(['todo']);
    },
  });

  return {
    mutate
  }
}
