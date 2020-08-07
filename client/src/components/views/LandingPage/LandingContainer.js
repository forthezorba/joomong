import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table, Space, Row, Col } from "antd";
import styled from "styled-components";
import "./LandingContainer.css";
const LandingContainerBlock = styled.div`
  .site-layout .ant-layout {
    margin-left: 50px !important;
    color: blue;
  }
  .ant-table-title {
    text-align: initial;
    color: red;
  }
  a {
    color: black;
  }
}
/*   @media (max-width: 767px) {
    .site-layout .ant-layout {
      margin-left: 50px !important;
      color: blue;
    }
  } */
`;

function LandingContainer({ props }) {
  console.log(props);
  const user = props.user;
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    if (user.userData) {
      getPosts();
    }
  }, [user.userData]);

  const getPosts = async (item_id) => {
    return await Axios.post("/api/blog/getPosts", {}).then((response) => {
      if (response.data.success) {
        setPosts(response.data.posts);
      } else {
        alert("Couldnt get blog`s lists");
      }
    });
  };
  console.log(Posts);

  const columns = [
    {
      title: "글쓴이",
      dataIndex: "writer.name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "날짜",
      dataIndex: "createdAt",
      render: (date, record) => (
        <span>{new Date(date).toLocaleDateString("ko-KR")}</span>
      ),
    },
    {
      title: "이동",
      key: "action",
      render: (obj, record) => <a href={`/blog/post/${obj._id}`}>보러가기</a>,
    },
  ];

  function showTotal(total) {
    return `Total ${total} items`;
  }

  return (
    <LandingContainerBlock>
      <Row gutter={[16, 16]}>
        {/* new post */}
        <Col lg={12} md={24}>
          <div>
            {Posts && (
              <Table
                dataSource={Posts}
                columns={columns}
                rowKey={(record) => record._id}
                bordered
                title={() => "New Post"}
                size="small"
                pagination={{
                  showSizeChanger: true,
                  defaultPageSize: 5,
                  pageSizeOptions: ["5", "10", "20"],
                  showTotal: showTotal,
                }}
              />
            )}
          </div>
        </Col>

        <Col lg={12} md={24}>
          <div>
            {Posts && (
              <Table
                dataSource={Posts}
                columns={columns}
                rowKey={(record) => record._id}
                bordered
                title={() => "New Post"}
                size="small"
                pagination={{
                  showSizeChanger: true,
                  defaultPageSize: 5,
                  pageSizeOptions: ["5", "10", "20"],
                  showTotal: showTotal,
                }}
              />
            )}
          </div>
        </Col>
      </Row>
    </LandingContainerBlock>
  );
}

export default LandingContainer;
