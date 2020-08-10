import React from "react";
import styled from "styled-components";
import Responsive from "../../../common/Responsive";
import EditorContainer from "../../../../containers/EditorContainer";

const WritePage = (props) => {
  console.log(props);
  //const {user} = props
  return (
    <Responsive>
      <EditorContainer props={props}></EditorContainer>
      {/* <TagBoxContainer></TagBoxContainer>
            <WriteActionButtonsContainer/> */}
    </Responsive>
  );
};
export default WritePage;
