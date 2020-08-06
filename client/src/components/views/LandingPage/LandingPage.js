import React from "react";
import { FaCode } from "react-icons/fa";
import { Row, Col } from "antd";
import Title from "antd/lib/typography/Title";

function LandingPage() {
  return (
    <>
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
    </>
  );
}

export default LandingPage;
