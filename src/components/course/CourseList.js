import React from "react";
import PropTypes from "prop-types";
import CourseListRow from './CourseListRow'

function CourseList({ courses }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>{' '}</th>
          <th>title</th>
          <th>author</th>
          <th>category</th>
          <th>length</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          <CourseListRow key={course.id} course={course} />
        ))}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
