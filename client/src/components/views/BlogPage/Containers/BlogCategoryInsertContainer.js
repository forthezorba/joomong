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
          placeholder="큰 분류를 입력하세요 ex)메모장, 일상, 뉴스, 자격증 ..."
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
