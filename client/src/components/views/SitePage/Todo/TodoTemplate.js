import React, { useState } from "react";
import "./TodoTemplate.scss";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";

const TodoTemplate = ({ children, item, onToggle, onRemove }) => {
  const [checked, setchecked] = useState(false);
  const onCheck = () => {
    setchecked(!checked);
    let variables = {
      category_id: item._id,
      checked: checked,
    };
    onToggle(variables);
  };

  return (
    <div className="TodoTemplate">
      <div className="app-title">
        <div className={cn("checkbox", { checked })} onClick={onCheck}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
        <div className="category">{item.category}</div>
        <div
          className="remove"
          onClick={() => {
            if (window.confirm("전체 삭제하시겠습니까?")) {
              onRemove(item._id);
            }
          }}
        >
          <MdRemoveCircleOutline />
        </div>
      </div>

      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
