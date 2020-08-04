import React from "react";
import { Col } from "antd";
import {FaRegEdit} from "react-icons/fa";
import cn from "classnames";
import "./BlogCategoryListItem.scss";


const BlogCategoryListItem = ({ todo, onEditBtnClick,category_id,onItemClick,selected_item }) => {
  const {_id, name, } = todo;
  const onToggle = (name) => {
    onItemClick({category_id,item_id:_id,name})
  };

  const isActive = (selected_item === name)
  
  return (
    <Col lg={3} md={6} xs={12} className={cn("BlogCategoryListItem",{isActive})}>
      <div className="nameWrap" onClick={()=>{onToggle(name)}}>
          <div className="name">{name}</div>
      </div>
      <div className="remove" onClick={() => onEditBtnClick(category_id,_id)}>
        {isActive && <FaRegEdit />}
      </div>
    </Col>
  );
};

export default BlogCategoryListItem;
