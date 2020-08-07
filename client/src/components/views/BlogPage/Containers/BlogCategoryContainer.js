import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlogTemplateContainer from "./BlogTemplateContainer";
import BlogCategoryInsertContainer from "./BlogCategoryInsertContainer";
import BlogCategoryListContainer from "./BlogCategoryListContainer";
import {
  get_categories,
  edit_category,
  delete_category,
  create_category,
} from "../../../../api/blogAPI";
import AskRemoveModal from "../AskRemoveModal";
const BlogCategoryContainerBlock = styled.div``;

const BlogCategoryContainer = ({
  props,
  setBlogs,
  getPosts,
  selected_item,
  selected_category,
  setselected_item,
  setselected_category,
  category_id,
  category_item_id,
  setcategory_id,
  setcategory_item_id
}) => {
  const user = props.user;
  const [modal, setModal] = useState(false);
  const [Category, setCategory] = useState("");
  const [List, setList] = useState([]);
  const [showList, setshowList] = useState(false);

  useEffect(() => {
    if (user.userData) {
      fetch_categories();
    }
  }, [user.userData]);

  const fetch_categories = async () => {
    const list = await get_categories({ userId: user.userData._id });
    setList(list);
  };
  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const onAddClick = () => {
    if (Category === "") {
      alert("카테고리를 입력해주세요");
      return;
    }
    setList(List.concat({ category: Category }));
    setCategory("");
  };

  const onInsert = (category, sub_category) => {
    const variables = {
      category: category,
      sub_category: {
        name: sub_category,
      },
      writer: user.userData._id,
    };
    const fetch_create = async () => {
      await create_category(variables);
      fetch_categories();
    };
    fetch_create();
  };

  const RemoveCategory = (category_id, category_item_id) => {
    const variables = {
      category_id: category_id,
      category_item_id: category_item_id,
    };
    const fetch_delete = async () => {
      await delete_category(variables);
      fetch_categories();
    };
    fetch_delete();
  };

  const onCategoryClick = (boolean, category) => {
    setshowList(boolean);
    setselected_category(category);
    setselected_item("");
    setBlogs();
  };

  const onItemClick = (variables) => {
    setcategory_id(variables.category_id);
    setcategory_item_id(variables.item_id);
    setselected_item(variables.name);

    const fetch = async () => {
      const list = await getPosts(variables.item_id);
      setBlogs(list);
    };
    fetch();
  };
  //=================================
  //       모달
  //=================================

  const onCancel = () => {
    setModal(false);
  };

  const onEditBtnClick = (category_id, category_item_id) => {
    setModal(true);
    setcategory_id(category_id);
    setcategory_item_id(category_item_id);
  };

  const onModalRemove = () => {
    setModal(false);
    RemoveCategory(category_id, category_item_id);
  };
  const onModalEdit = (edited_category, edited_category_item) => {
    const variables = {
      category_id,
      category_item_id,
      edited_category,
      edited_category_item,
    };
    setModal(false);

    const fetch_edit = async () => {
      await edit_category(variables);
      fetch_categories();
    };
    fetch_edit();
  };
  return (
    <BlogCategoryContainerBlock>
      <BlogTemplateContainer
        List={List}
        onCategoryClick={onCategoryClick}
        onInsert={onInsert}
        onEditBtnClick={onEditBtnClick}
        selected_category={selected_category}
        selected_item={selected_item}
        showList={showList}
      />
      <BlogCategoryInsertContainer
        Category={Category}
        onCategoryChange={onCategoryChange}
        onAddClick={onAddClick}
      />
      <BlogCategoryListContainer
        List={List}
        selected_item={selected_item}
        selected_category={selected_category}
        onItemClick={onItemClick}
        onInsert={onInsert}
        onEditBtnClick={onEditBtnClick}
      />
      <AskRemoveModal
        selected_item={selected_item}
        selected_category={selected_category}
        category_item_id={category_item_id}
        visible={modal}
        /* onConfirm={onConfirm} */
        onCancel={onCancel}
        onModalRemove={onModalRemove}
        onModalEdit={onModalEdit}
      />
    </BlogCategoryContainerBlock>
  );
};
export default BlogCategoryContainer;
