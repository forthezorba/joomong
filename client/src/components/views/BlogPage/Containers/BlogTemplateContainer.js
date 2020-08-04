import React from "react";
import styled from "styled-components";
import BlogCategoryTemplate from "../Todo/BlogCategoryTemplate";
import { Card, Icon, Avatar, Col, Typography, Row, message } from "antd";

const BlogTemplateContainerBlock = styled.div``;

const BlogTemplateContainer = ({
  List,
  onCategoryClick,
  onInsert,
  onEditBtnClick,
  selected_category,
  selected_item,
  showList,
}) => {
  return (
    <Row style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.125)" }}>
      {List && List.map((item) => {
          return (
            <Col lg={4} md={6} xs={8} key={item._id}>
              {
                <BlogCategoryTemplate
                  item={item}
                  key={item._id}
                  onCategoryClick={onCategoryClick}
                  onInsert={onInsert}
                  onEditBtnClick={onEditBtnClick}
                  selected_category={selected_category}
                  showList={showList}
                  selected_item={selected_item}
                />
              }
            </Col>
          );
        })}
    </Row>
  );
};
export default BlogTemplateContainer;
