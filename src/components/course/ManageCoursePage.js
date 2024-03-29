import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseActions";
import { bindActionCreators } from "redux";
import CourseForm from "./CourseForm";
import toastr from "toastr";
import { authorsFormattedForDropdown } from "../../selectors/selectors";

export class ManageCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.course.id !== nextProp.course.id) {
      this.setState(() => {
        return { course: Object.assign({}, nextProp.course) };
      });
    }
  }

  static propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState(() => {
      return { course: course };
    });
  }

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};
    if (this.state.course.title.length < 5) {
      errors.title = "title must be at least 5 characters";
      formIsValid = false;
    }
    this.setState(() => {
      return { errors: errors };
    });
    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();
    if (!this.courseFormIsValid()) {
      return;
    }
    this.setState(() => {
      return { saving: true };
    });
    this.props.actions
      .saveCourse(this.state.course)
      //this is possible because of promise like nature of thunks
      .then(() => {
        this.redirect();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  redirect() {
    this.setState(() => {
      return { saving: false };
    });
    toastr.success("course saved");
    this.props.history.push("/Courses");
  }

  handleError(error) {
    toastr.error(error);
    this.setState(() => {
      return { saving: false };
    });
  }

  render() {
    return (
      <div>
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id === id);
  if (course.length) return course[0];
  return null;
}

const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.match.params.id;

  let course = {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    length: "",
    category: ""
  };

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    course: course,
    authors: authorsFormattedForDropdown(state.authors)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
