import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./Todo/TodoInsert.scss";
import { Col } from "antd";
import TodoTemplate from "./Todo/TodoTemplate";
import TodoInsert from "./Todo/TodoInsert";
import TodoList from "./Todo/TodoList";
import { useSelector } from "react-redux";
import {
  get_sites,
  create_site,
  remove_site,
  toggle_site,
} from "../../../api/siteAPI";

function SitePage() {
  const user = useSelector((state) => state.user);
  const [Category, setCategory] = useState("");
  const [List, setList] = useState([]);

  useEffect(() => {
    /* userData 생기면 sites 불러오기 */
    const fetch_sites = async () => {
      const list = await get_sites({ userId: user.userData._id });
      setList(list);
    };
    if (user.userData) {
      fetch_sites();
    }
  }, [user.userData]);

  //=================================
  //        insert component
  //=================================

  const onAddClick = (e) => {
    e.preventDefault();
    if (Category === "") {
      alert("카테고리를 입력해주세요");
      return;
    }
    setList(List.concat({ category: Category }));
    setCategory("");
  };

  const onChange = (e) => {
    setCategory(e.target.value);
  };

  //=================================
  //       site API
  //=================================

  const onInsert = (form, category) => {
    /* site입력 시 create site 후 list새로 받아오기 */
    const todo = {
      name: form.name,
      url: form.url,
      checked: false,
    };

    const variables = {
      category: category,
      todo,
      writer: user.userData._id,
    };

    const fetch = async () => {
      const list = await create_site(variables);
      setList(list);
    };
    fetch();
  };

  const onRemove = (categoryId, _id) => {
    /* site 삭제 후 list 받아오기 */
    const variables = {
      categoryId: categoryId,
      id: _id,
      writer: user.userData._id,
    };

    const fetch = async () => {
      const list = await remove_site(variables);
      setList(list);
    };
    fetch();
  };

  const onToggle = (obj) => {
    /* site 삭제 후 list 받아오기 */
    const variables = {
      category_id: obj.category_id,
      todo_id: obj.todo_id,
      checked: obj.checked,
      writer: user.userData._id,
    };
    const fetch = async () => {
      const list = await toggle_site(variables);
      setList(list);
    };
    fetch();
  };

  //=================================
  //       render list
  //=================================

  const renderTodoCategory =
    List &&
    List.map((item) => {
      return (
        <Col key={item._id} lg={6} md={12} xs={24}>
          <TodoTemplate item={item} onToggle={onToggle} onRemove={onRemove}>
            <TodoInsert onInsert={onInsert} item={item} />
            <TodoList item={item} onRemove={onRemove} onToggle={onToggle} />
          </TodoTemplate>
        </Col>
      );
    });

  return (
    <div style={{ width: "80%", margin: "3rem auto" }}>
      <div className="bigCategory">
        <form className="TodoInsert">
          <input
            placeholder="새로운 그룹을 입력해주세요( 입력 후 하나 이상 저장해야 그룹이 저장됩니다 ) "
            value={Category}
            name="name"
            onChange={onChange}
          />
          <button type="submit" onClick={onAddClick}>
            <MdAdd />
          </button>
        </form>
      </div>

      {renderTodoCategory}
    </div>
  );
}

export default SitePage;
