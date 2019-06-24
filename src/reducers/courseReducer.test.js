import courseReducer from "./courseReducer";
import {
  createCourseSuccess,
  updateCourseSuccess
} from "../actions/courseActions";

describe("course reducer", () => {
  it("should add course when passed CREATE_COURSE_SUCCESS", () => {
    const initialState = [{ title: "A" }, { title: "B" }];

    const newCourse = { title: "C" };
    const action = createCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toBe("A");
  });

  it("should update courses when passed UPDATE_COURSE_SUCCESS", () => {
    const initialState = [
      { id: "A", title: "A" },
      { id: "B", title: "B" },
      { id: "C", title: "C" }
    ];

    const editedCourse = { id: "B", title: "D" };
    const action = updateCourseSuccess(editedCourse);
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(course => course.id === editedCourse.id);
    const unToucedCourse = newState.find(course => course.id === "A");

    console.log(updatedCourse);
    expect(unToucedCourse.title).toBe("A");
    expect(updatedCourse.title).toBe("D");
    expect(newState.length).toBe(3);
  });
});
