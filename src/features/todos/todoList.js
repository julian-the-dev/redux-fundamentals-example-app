import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import TodoListItem from './todoListItem';

const selectTodos = state => state.todos;
const selectFilters = state => state.filters;
const filterTodosByColor = (todo, colors) => {
  if(!colors.length) {
    return true;
  }
  return !todo.color ? true : colors.indexOf(todo.color) >=0;
}

const TodoList = () => {
  const todos = useSelector(selectTodos, shallowEqual)
  const filters = useSelector(selectFilters);
  console.log(filters);

  const renderedListItems = todos.filter(todo => filterTodosByColor(todo, filters.colors)).map(todo => {
    return <TodoListItem key={todo.id} id={todo.id} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList;