import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";
import { Card, Icon, Avatar, Col, Typography, Row, message } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import { delete_post } from "../../../../api/blogAPI";
import { setOriginalPost } from "../../../../_actions/write_actions";
import { useDispatch } from "react-redux";
const { Meta } = Card;

const BlogPostContainerBlock = styled.div``;

const BlogPostContainer = ({user, history,blogs, getPosts, setBlogs, category_item_id }) => {

  const dispatch = useDispatch();
  const [postId, setpostId] = useState();

  const onRemoveClick = (blog) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setpostId(blog._id);
      onRemove(blog._id);
    }
  };
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
  
  const onEdit = (blog) => {
    dispatch(setOriginalPost(blog))
    if(user.userData._id === blog.writer._id){
      history.push(`/blog/post/write`)
    }
  };

  return (
    <BlogPostContainerBlock>
      <Row gutter={[32, 16]}>
        {blogs &&
          blogs.map((blog) => {
            return (
              <Col key={blog._id} lg={8} md={12} xs={24}>
                <Link to={`/blog/post/${blog._id}`}>
                  <Card
                    title={blog.title}
                    hoverable
                    style={{ width: 370, marginTop: 16 }}
                    actions={
                      [
                      <Icon
                        type="setting"
                        key="setting"
                        onClick={(e) => {
                          e.preventDefault();
                          onEdit(blog);
                        }}
                      />,
                      <Icon
                        type="delete"
                        key="delete"
                        onClick={(e) => {
                          e.preventDefault();
                          onRemoveClick(blog);
                        }}
                      />,
                    ]}
                  >
                    <Meta
                      avatar={<Avatar src={blog.writer.image} />}
                      title={blog.writer.name}
                      /* description={blog.writer.name} */
                    />
                    <div
                      style={{
                        height: 150,
                        overflowY: "scroll",
                        marginTop: 10,
                      }}
                    >
                      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                  </Card>
                </Link>
              </Col>
            );
          })}
      </Row>
    </BlogPostContainerBlock>
  );
};
export default withRouter(BlogPostContainer); 
