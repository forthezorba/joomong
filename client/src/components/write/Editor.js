import React, { useRef, useEffect, useState } from "react";
import palette from "../../lib/styles/palette";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import { Typography, Button, Form, message } from "antd";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import QuillEditorCopy from "./QuillEditorCopy";
import { withRouter } from "react-router-dom";

const EditorBlock = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = ({ onChangeField, history, match }) => {
  const user = useSelector((state) => state.user);
  const { title, content, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      content: write.content,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    })
  );


  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };
  const onChangeContent = (value) => {
    onChangeField({ key: "content", value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (user.userData && !user.userData.isAuth) {
      return alert("Please Log in first");
    }

    const variables = {
      title: title,
      content: content,
      userID: user.userData._id,
      originalPostId: originalPostId,
    };

    axios.post("/api/blog/createPost", variables).then((response) => {
      if (response) {
        message.success("Post Created!");

        setTimeout(() => {
          history.push("/blog");
        }, 1500);
      }
    });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <QuillWrapper>
        <QuillEditorCopy content={content} onEditorChange={onChangeContent} />
      </QuillWrapper>
      <Form onSubmit={onSubmit}>
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <Button
            size="large"
            htmlType="submit"
            className=""
            onSubmit={onSubmit}
          >
            Submit
          </Button>
        </div>
      </Form>
    </EditorBlock>
  );
};
export default withRouter(Editor);
