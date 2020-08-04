import React from "react";

import "./BlogCategoryTemplate.scss";
import { FaArrowAltCircleLeft, FaArrowAltCircleDown } from "react-icons/fa";
import cn from "classnames";
import { FaRegEdit } from "react-icons/fa";

const BlogCategoryTemplate = ({item,onCategoryClick,selected_category,onEditBtnClick,selected_item}) => {

  const isCategoryActive = selected_category === item.category;
  const onToggle = (category) => {
    if (selected_category === category) {
      /* 중복으로 누르면 */
      onCategoryClick(isCategoryActive, '');
    } else {
      /* 처음 눌렀을때 */
      onCategoryClick(!isCategoryActive, category);
    }
  };
  
  return (
    <div className={cn("BlogCategoryTemplate", { isCategoryActive })}>
      <div className="add_btn">
        {isCategoryActive ? <FaArrowAltCircleDown /> : <FaArrowAltCircleLeft />}
      </div>
      <div
        className="app-title"
        onClick={() => {
          onToggle(item.category);
        }}
      >
        <div className="category">{item.category}</div>
      </div>
      <div className="edit" onClick={() => onEditBtnClick(item._id)}>
        {isCategoryActive && !selected_item ? <FaRegEdit /> : null}
      </div>
    </div>
  );
};

export default BlogCategoryTemplate;
