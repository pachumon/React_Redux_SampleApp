import React from "react";
import { ManageCoursePage } from "./ManageCoursePage";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Manage Course Page tests", () => {
  it("sets error message when trying to save empty title", () => {
    const props = {
      authors: [],
      course: {
        id: "",
        watchHref: "",
        title: "",
        authorId: "",
        length: "",
        category: ""
      },
      actions: {
        saveCourse: () => {
          return Promise.reject();
        }
      }
    };

    const wrapper = Enzyme.mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find("input").last();
    expect(saveButton.prop("type")).toBe("submit");
    saveButton.simulate("click");
    expect(wrapper.state().errors.title).toBe('title must be at least 5 characters')
  });
});
