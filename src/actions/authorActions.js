import AuthorApi from "../api/mockAuthorApi";
import actionTypes from "../constants/actionTypes";
import { beginAjaxCall } from "./ajaxStatusActions";

export function loadAuthorSuccess(authors) {
  return {
    type: actionTypes.LOAD_AUTHOR_SUCCESS,
    authors
  };
}

export function loadAuthors() {
  return async dispatch => {
    try {
      dispatch(beginAjaxCall());
      const authors = await AuthorApi.getAllAuthors();
      dispatch(loadAuthorSuccess(authors));
    } catch (error) {
      throw error;
    }
  };
}
