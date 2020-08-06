import React, { useState, useCallback, useRef } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert, item }) => {
  const name_ref = useRef();
  const url_ref = useRef();

  const [form, setForm] = useState({
    name: "",
    url: "http://",
  });
  const onFormChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사 한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어씌우기
    };
    setForm(nextForm);
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onInsert(form, item.category);
      setForm({ name: "", url: "http://" });
    },
    [onInsert, form]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        ref={name_ref}
        placeholder="이름"
        name="name"
        onChange={onFormChange}
        value={form.name}
      />
      <input
        ref={url_ref}
        name="url"
        onChange={onFormChange}
        value={form.url}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
