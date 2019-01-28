import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../actions/courseActions";
import { bindActionCreators } from "redux";

class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = { course: { title: "" } };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const { course } = { ...this.state };
    course.title = event.target.value;
    this.setState(() => {
      return { course: course };
    });
  }

  onClickSave(event) {
    this.props.actions.createCourse(this.state.course);
    this.setState(() => {
      return { course: { title: "" } };
    });
  }
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>add courses</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="save" onClick={this.onClickSave} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursePage);
