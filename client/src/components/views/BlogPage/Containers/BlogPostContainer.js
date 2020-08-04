import React, { useState } from "react";
import styled from "styled-components";
import { Card, Icon, Avatar, Col, Typography, Row, message } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import { delete_post } from "../../../../api/blogAPI";
const { Meta } = Card;

const BlogPostContainerBlock = styled.div``;

const BlogPostContainer = ({ blogs, getPosts, setBlogs, category_item_id }) => {
  const [postId, setpostId] = useState();

  const onRemove = async (postId) => {
    const variable = { postId: postId };

    const fetch_sites = async () => {
      const result = await delete_post(variable);
      if (result) {
        message.success("Post deleted!");
        const list = await getPosts(category_item_id);
        setBlogs(list);
      }
    };
    fetch_sites();
  };
  const onRemoveClick = (blog) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setpostId(blog._id);
      onRemove(blog._id);
    }
  };

  return (
    <BlogPostContainerBlock>
      <Row gutter={[32, 16]}>
        {blogs &&
          blogs.map((blog) => {
            return (
              <Col key={blog._id} lg={8} md={12} xs={24}>
                <Link to={`/blog/post/${blog._id}`}></Link>
                <Card
                  title={blog.title}
                  hoverable
                  style={{ width: 370, marginTop: 16 }}
                  actions={[
                    <Icon type="setting" key="setting" />,
                    <a href={`/blog/post/${blog._id}`}> <Icon type="ellipsis" key="ellipsis" /></a>,
                    <Icon type="edit" key="edit" />,
                    <Icon
                      type="delete"
                      key="delete"
                      onClick={() => onRemoveClick(blog)}
                    />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src={blog.writer.image} />}
                    title={blog.writer.name}
                    /* description={blog.writer.name} */
                  />
                  <div
                    style={{ height: 150, overflowY: "scroll", marginTop: 10 }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                  </div>
                </Card>
              </Col>
            );
          })}
      </Row>
    </BlogPostContainerBlock>
  );
};
export default BlogPostContainer;
