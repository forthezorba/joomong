import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Icon, Avatar, Col, Typography, Row, message } from "antd";
import { AiOutlinePlusSquare } from "react-icons/ai";
import AskRemoveModal from "../AskRemoveModal";
import BlogCategoryContainer from "../Containers/BlogCategoryContainer";
import {
  get_categories,
  edit_category,
  delete_category,
  create_category,
} from "../../../../api/blogAPI";
import WriteActionContainer from "../Containers/WriteActionContainer";
import BlogPostContainer from "../Containers/BlogPostContainer";
const { Title } = Typography;
const { Meta } = Card;

function BlogPage(props) {
  //const user = useSelector((state) => state.user);
  const user = props.user;
  const [blogs, setBlogs] = useState([]);
  const [modal, setModal] = useState(false);
  const [category_id, setcategory_id] = useState();
  const [category_item_id, setcategory_item_id] = useState();
  const [selected_item, setselected_item] = useState();
  const [selected_category, setselected_category] = useState();

  //=================================
  //       포스트
  //=================================

  

  const getPosts = async (item_id) => {

    return await axios
      .post("/api/blog/getPosts", { category_item_id: item_id })
      .then((response) => {
        if (response.data.success) {
          return response.data.posts;
        } else {
          alert("Couldnt get blog`s lists");
        }
      });
  };

  //=================================
  //       모달
  //=================================

  

  return (
    <div style={{ width: "85%", margin: "2rem auto" }}>
      <BlogCategoryContainer
        props={props}
        setBlogs={setBlogs}
        getPosts={getPosts}
        selected_item={selected_item}
        selected_category={selected_category}
        setselected_item={setselected_item}
        setselected_category={setselected_category}
        category_id={category_id}
        category_item_id={category_item_id}
        setcategory_id={setcategory_id}
        setcategory_item_id={setcategory_item_id}
      />

      <WriteActionContainer
        selected_item={selected_item}
        selected_category={selected_category}
        category_id={category_id}
        category_item_id={category_item_id}
      />

        <BlogPostContainer
          blogs={blogs}
          setBlogs={setBlogs}
          getPosts={getPosts}
          category_item_id={category_item_id}
        />
    </div>
  );
}

export default BlogPage;
