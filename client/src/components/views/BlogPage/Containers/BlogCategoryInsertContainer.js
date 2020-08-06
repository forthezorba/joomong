import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const BlogCategoryInsertContainerBlock = styled.div``;

const BlogCategoryInsertContainer = ({
    Category,
    onCategoryChange,
    onAddClick,
}) => {
  return (
    <BlogCategoryInsertContainerBlock>
      <form className="BlogCategoryInsert">
        <input
          placeholder="새로운 그룹을 입력 후 클릭해주세요( 입력 후 하나 이상 저장해야 그룹이 저장됩니다 )"
          name="name"
          value={Category}
          onChange={onCategoryChange}
        />
        <button type="submit" onClick={(e)=>{
          e.preventDefault();
          onAddClick(Category)
        }}>
          <MdAdd />
        </button>
      </form>
    </BlogCategoryInsertContainerBlock>
  );
};
export default BlogCategoryInsertContainer;
