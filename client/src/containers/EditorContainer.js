import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "../_actions/write_actions";
import Editor from "../components/write/Editor";

const EditorContainerBlock = styled.div``;

const EditorContainer = () => {

  const dispatch = useDispatch();
  //store에서 가져오기
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  //useCallback 사용이유 -> 한번만 쓰게해줌(리랜더링 방지)
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );


  //언마운트 시 초기화
  useEffect(() => {
    /* return () => {
      dispatch(initialize());
    }; */
  }, [dispatch]);

  return <Editor onChangeField={onChangeField} title={title} body={body}/>;
};
export default EditorContainer;
