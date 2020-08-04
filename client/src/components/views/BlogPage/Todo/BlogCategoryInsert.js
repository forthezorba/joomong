import React, { useState, useCallback, useRef } from "react";
import "./BlogCategoryInsert.scss";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdAdd } from "react-icons/md";
import cn from "classnames";

const BlogCategoryInsert = ({ onInsert,  item }) => {
  const name_ref = useRef();
  const url_ref = useRef();
  const [name, setname] = useState("");

  const onChange = (e) => {
    setname(e.target.value);
  };

  const onSubmit = ((e) => {
    e.preventDefault();
    /* 세부 카테고리를 blogpage로 전송 */
    onInsert(item.category, name);
    setname("");
    //name_ref.current.value = "";
  });

  return (
    <div>
    <form className="BlogCategoryInsert" onSubmit={onSubmit}>
      <input
        ref={name_ref}
        placeholder={`(${item.category}) 작은 분류를 입력하세요`}
        name="name"
        onChange={onChange} 
        value={name}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
    </div>
  );
};

export default BlogCategoryInsert;
