import React from "react";
import {
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Icon } from "antd";
import "./LandingPage.css";
import LandingContainer from "./LandingContainer";

const { Header, Content, Footer, Sider } = Layout;

function LandingPage(props) {
  return (
    <Layout>
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        className="left"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <UserOutlined />
            new Post
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center", backGround: "#fff" }}
          >
            <LandingContainer props={props} />
          </div>
        </Content>
      </Layout>
    </Layout>
    /* <>
      <div className="app">
        <Col lg={18} style={{margin: '2rem',borderBottom: '1px solid gainsboro'}}>
          <Title>Site</Title>
          <p style={{background: 'antiquewhite', width: 'fit-content'}}>
            자주 이용하는 웹사이트를 그룹별로 정리하고, checkbox 기능을 통해
            todo 처럼 관리해보세요
          </p>
          <br />
          <a
            href="https://joomongimage.s3.ap-northeast-2.amazonaws.com/linkCapture.jpg"
            target="_blank"
          >
            <img
              style={{ width: "70%" }}
              src="https://joomongimage.s3.ap-northeast-2.amazonaws.com/linkCapture.jpg"
            />
          </a>
        </Col>
        <Col lg={18} style={{margin: '2rem',borderBottom: '1px solid gainsboro'}}>
          <Title>Blog</Title>
          <p style={{background: 'antiquewhite', width: 'fit-content'}}>
            관심사를 그룹별로 정리하고, 소그룹을 통해 포스트를 체계적으로 관리해보세요
          </p>
          <br />
          <a
            href="https://joomongimage.s3.ap-northeast-2.amazonaws.com/blogCapture.jpg"
            target="_blank"
          >
            <img
              style={{ width: "70%" }}
              src="https://joomongimage.s3.ap-northeast-2.amazonaws.com/blogCapture.jpg"
            />
          </a>
        </Col>

      </div>
      <div style={{ float: "right" }}></div>
    </> */
  );
}

export default LandingPage;
