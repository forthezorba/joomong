import {
  INITIALIZE,
  WRITE_POST,
  CHANGE_FIELD,
  SET_ORIGINAL_POST,
  UPDATE_POST,
} from "../_actions/types";

const initialState = {
  title: "",
  content: "",
  tags: [],
  post: null,
  postError: null,
  originalPostId: null,
};

//export const changeField = ()=>({type:CHANGE_FIELD})

const write = function (state = initialState, action) {

  switch (action.type) {
    case INITIALIZE:
      return initialState;

    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case WRITE_POST:
      return { ...state, post: action.payload };

    case UPDATE_POST:
      return { ...state, post: action.payload };

    case SET_ORIGINAL_POST:
      return { ...state, 
        title: action.payload.title,
        content: action.payload.content,
        originalPostId: action.payload._id,
      }

/*       return (state, { payload: post }) => ({
        ...state,
        title: post.title,
        body: post.body,
        originalPostId: post._id,
      }); */
      
    default:
      return state;
  }
}

export default write;
