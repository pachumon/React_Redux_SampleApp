import { createCourseSuccess, updateCourseSuccess } from "./courseActions";
import actionTypes from "../constants/actionTypes";

describe("course action tests", () => {
  describe("createCourseSuccess", () => {
    it("", () => {
      const course = { id: "clean-code", title: "Clean Code" };
      const expectedAction = {
        type: actionTypes.CREATE_COURSES_SUCCESS,
        course: course
      };

      const action = createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    });
  });
});
