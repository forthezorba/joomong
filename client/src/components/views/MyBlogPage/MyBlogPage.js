import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Icon, Avatar, Col, Typography, Row ,Tabs, Button} from "antd";
import { MdAdd } from "react-icons/md";

import BlogTab from "../BlogPage/Todo/BlogTab";

const { TabPane } = Tabs;

const { Title } = Typography;
const { Meta } = Card;
/* const panes = [
  { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
]; */

function MyBlogPage() {
  const [Category, setCategory] = useState("");
  const [List, setList] = useState([]);
  const panes = [
    { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
    { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
  ];
  let newTabIndex = 0;
  const [State, setState] = useState({
    activeKey: panes[0].key,
    panes,
  })

  const onAddClick = (e) => {
    e.preventDefault();
    console.log("onaddclicked", Category);
    if (Category === "") {
      alert("카테고리를 입력해주세요");
      return;
    }
    setList(List.concat({ category: Category }));
    setCategory("");

    const { panes } = State;
    const activeKey = `newTab${newTabIndex++}`;
    panes.push({ title: Category, content: Category, key: activeKey });
    setState({ panes, activeKey });
  };


  
  console.log(State)

  const onChange = activeKey => {
    setState({ activeKey });
  };

  const onEdit = (targetKey, action) => {
    [action](targetKey);
    //this[action](targetKey);
  };

  const remove = targetKey => {
    let { activeKey } = State;
    let lastIndex;
    State.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = State.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    setState({ panes, activeKey });
  };


  return (
    <>
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <form className="BlogCategoryInsert">
        <input
          placeholder="카테고리를 입력하세요"
          name="name"
          value={Category}
          onChange={e=>{setCategory(e.target.value)}}
        />
        <button type="submit" onClick={onAddClick}>
          <MdAdd />
        </button>
      </form>
    </div>
    
    <div>
        {/* <div style={{ margin: 16 }}>
          <Button onClick={add}>ADD</Button>
        </div> */}
        <div style={{ margin: 16 }}>
          <Button onClick={onEdit}>Edit</Button>
        </div>
        <Tabs
          hideAdd
          onChange={onChange}
          activeKey={State.activeKey}
          type="editable-card"
          onEdit={onEdit}
        >
          {State.panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </div>

    </>
  );
}

export default MyBlogPage;
