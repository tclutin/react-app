export const Priority = {
  LOW: 'Низкий',
  MEDIUM: 'Средний',
  HIGH: 'Высокий',
};

export function TodoItem(id, title, isDone, priority) {
  this.id = id;
  this.title = title;
  this.isDone = isDone;
  this.priority = priority
}