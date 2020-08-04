import React from "react";
import styled from "styled-components";
import BlogCategoryList from "../Todo/BlogCategoryList";
import { Row } from "antd";

const BlogCategoryListContainerBlock = styled.div``;

const BlogCategoryListContainer = ({
  List,
  selected_item,
  selected_category,
  onItemClick,
  onInsert,
  onEditBtnClick,
}) => {
  return (
    <Row>
      {List &&
        List.map((item) => {
          return (
            <BlogCategoryList
              key={item._id}
              selected_item={selected_item}
              selected_category={selected_category}
              onItemClick={onItemClick}
              item={item}
              onInsert={onInsert}
              onEditBtnClick={onEditBtnClick}
            />
          );
        })}
    </Row>
  );
};
export default BlogCategoryListContainer;
