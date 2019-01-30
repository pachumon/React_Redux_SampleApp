import TestUtils from "react-dom/test-utils";
import React from "react";
import ReactDOM from "react-dom";
import CourseForm from "./CourseForm";
import ShallowRenderer from "react-test-renderer/shallow";

function setup(saving) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = new ShallowRenderer();
  renderer.render(<CourseForm {...props} />);
  let output = renderer.getRenderOutput();
  return { props, output, renderer };
}

describe("courseform via react test utils", () => {
  it("render form and h1", () => {
    const { output } = setup();
    expect(output.type).toBe("form");
    const h3 = output.props.children[0];
    expect(h3.type).toBe("h3");
  });

  it("save button is labelled save when not saving", () => {
    const { output } = setup(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe("Save");
  });

  it("save button is labelled save when not saving", () => {
    const { output } = setup(true);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe("Saving...");
  });
});
