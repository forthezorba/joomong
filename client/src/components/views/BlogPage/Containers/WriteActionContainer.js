import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Title from "antd/lib/typography/Title";

const WriteActionContainerBlock = styled.div``;

const WriteActionContainer = ({
  selected_item,
  selected_category,
  category_id,
  category_item_id,
}) => {

  if (!selected_category) return null;

  return (
    <>
      {selected_category && selected_item &&(
        <Row
          gutter={[32, 16]}
          style={{ textAlign: "center", margin: "2rem auto" }}
        >
          <Link to={`/blog/createPost/${category_id}/${category_item_id}`}>
            <Title>
              {selected_category}({selected_item}) 글쓰기
              <AiOutlinePlusSquare style={{ fontSize: 30 }} />
            </Title>
          </Link>
        </Row>
      )}
    </>
  );
};
export default WriteActionContainer;
