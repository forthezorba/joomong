import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ item, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {item.todo && item.todo.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo._id}
          onRemove={onRemove}
          onToggle={onToggle}
          category={item.category}
          category_id={item._id}
        />
      ))}
    </div>
  );
};

export default TodoList;
