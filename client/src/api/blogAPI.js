import Axios from "axios";
/* categories */
export const get_categories = async (userId) => {
  return Axios.post("/api/blog/getCategories", userId).then((response) => {
    if (response.data.success) {
      return response.data.cates;
    } else {
      alert("Failed to save Comment");
    }
  });
};

export const create_category = async (variables) => {
  return Axios.post("/api/blog/createCategory", variables).then((response) => {
    if (response.data.success) {
      return response.data.cates;
    } else {
      alert("Failed to save Comment");
    }
  });
};

export const edit_category = async (variables) => {
  return Axios.post("/api/blog/editCategory", variables).then((response) => {
    if (response.data.success) {
      return response.data.cates;
    } else {
      alert("Failed to save Comment");
    }
  });
};

export const delete_category = async (variables) => {
  return Axios.post("/api/blog/deleteCategory", variables).then((response) => {
    if (response.data.success) {
      return response.data.cates;
    } else {
      alert("Failed to save Comment");
    }
  });
};

/* posts */
export const delete_post = async (variables) => {
  return Axios.post("/api/blog/deletePost", variables).then((response) => {
    if (response.data.success) {
      return true;
    } else {
      alert("Failed to delete");
    }
  });
};
