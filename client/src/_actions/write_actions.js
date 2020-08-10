import { INITIALIZE, CHANGE_FIELD, SET_ORIGINAL_POST } from "./types";

export function changeField(payload) {

  return {
    type: CHANGE_FIELD,
    payload,
  };
}

export function setOriginalPost(payload) {

  return {
    type: SET_ORIGINAL_POST,
    payload,
  };
}



export function initialize() {
  return {
    type: INITIALIZE,
  };
}
