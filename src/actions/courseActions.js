import actionTypes from "../constants/actionTypes";
import courseApi from "../api/mockCourseApi";
import { beginAjaxCall, ajaxCallError } from "../actions/ajaxStatusActions";

export function loadCoursesSuccess(courses) {
  return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: actionTypes.UPDATE_COURSES_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: actionTypes.CREATE_COURSES_SUCCESS, course };
}

export function loadCourses(params) {
  return async dispatch => {
    try {
      dispatch(beginAjaxCall());
      const courses = await courseApi.getAllCourses();
      dispatch(loadCoursesSuccess(courses));
    } catch (error) {      
      throw error;
    }
  };
}

export function saveCourse(course) {
  return async (dispatch, getState) => {
    try {
      dispatch(beginAjaxCall());
      const savedcourse = await courseApi.saveCourse(course);
      course.id
        ? dispatch(updateCourseSuccess(savedcourse))
        : dispatch(createCourseSuccess(savedcourse));
    } catch (error) {
      dispatch(ajaxCallError());
      throw error;
    }
  };
}
