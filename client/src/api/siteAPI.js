import Axios from "axios";

export const get_sites = (userId) => {

  return Axios.post("/api/site/getSites", userId).then((response) => {
    if (response.data.success) {
      let list = response.data.sites;
      return list;
    } else {
      alert("Failed to save");
    }
  });
};
export const create_site = async (variables) => {

  return await Axios.post("/api/site/createSite", variables).then(
    (response) => {
      if (response.data.success) {
        return get_sites({ userId: variables.writer });
      } else {
        alert("Failed to save Comment");
      }
    }
  );
};

export const remove_site = async(variables)=>{

    return await Axios.post("/api/site/deleteSite",variables).then((response) => {
        if (response.data.success) {
          return get_sites({ userId: variables.writer });
        } else {
          alert("Failed to remove");
        }
      });
}

export const toggle_site = async(variables)=>{

    return await Axios.post("/api/site/check", variables).then((response) => {
        if (response.data.success) {
            return get_sites({ userId: variables.writer });
        } else {
          alert("Failed to save Comment");
        }
      });
}