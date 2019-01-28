import actionTypes from "../constants/actionTypes";
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)];

    default:
      return state;
  }
}
