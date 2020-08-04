import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QuillEditor from "../../../editor/QuillEditor";
import { Typography, Button, Form, message } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";

const { Title } = Typography;
const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::befor {
    left: 0px;
  }
`;

function CreatePost({ history, match }) {
  console.log(match.params);
  const user = useSelector((state) => state.user);

  const [content, setContent] = useState("");
  const [PostTitle, setPostTitle] = useState();
  const [files, setFiles] = useState([]);

  const onEditorChange = (value) => {
    setContent(value);
  };
  const onPostTitleChange = (e) => {
    setPostTitle(e.target.value);
  };
  const onFilesChange = (files) => {
    setFiles(files);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setContent("");

    if (user.userData && !user.userData.isAuth) {
      return alert("Please Log in first");
    }

    const variables = {
      title: PostTitle,
      content: content,
      userID: user.userData._id,
      category: match.params.category,
      category_item: match.params.category_item,
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
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <Title level={2}>
          <input onChange={onPostTitleChange} />
        </Title>
      </div>
      <QuillWrapper>
        <QuillEditor
          placeholder={"Start Posting Something"}
          onEditorChange={onEditorChange}
          onFilesChange={onFilesChange}
        />
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
    </div>
  );
}

export default CreatePost;
