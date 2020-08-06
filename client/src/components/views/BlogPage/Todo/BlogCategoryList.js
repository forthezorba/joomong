import React from "react";
import BlogCategoryListItem from "./BlogCategoryListItem";
import "./BlogCategoryList.scss";
import {Col} from "antd";
import BlogCategoryInsert from "./BlogCategoryInsert";

const BlogCategoryList = ({onItemClick, item, onEditBtnClick, selected_item, selected_category,onInsert,onRemoveClick }) => {

  return item.category===selected_category? (
    <>
      {item.sub_category &&
        item.sub_category.map((todo) => (
          <BlogCategoryListItem
            todo={todo}
            key={todo._id}
            onEditBtnClick={onEditBtnClick}
            onItemClick={onItemClick}
            category={item.category}
            category_id={item._id}
            selected_item={selected_item}
          />
        ))}
    <Col lg={3} md={6} xs={12} style={{padding: '.5rem'}}>
      <BlogCategoryInsert  item={item} onInsert={onInsert}/>
    </Col>
    </>
  ):null
};

export default BlogCategoryList;
