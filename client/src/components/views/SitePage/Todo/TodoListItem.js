import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle, category_id }) => {
  const { _id, name, url, checked } = todo;

  return (
    <div className="TodoListItem">
      <div
        className={cn("checkbox", { checked })}
        onClick={() => onToggle({ todo_id: _id, category_id: category_id })}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>
      <div>
        <a href={url} target="_blank">
          <div className="name">{name}</div>
        </a>
      </div>
      <div
        className="remove"
        onClick={() => {
          if (window.confirm("정말 삭제하시겠습니까?")) {
            onRemove(category_id, _id);
          }
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
