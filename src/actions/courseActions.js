import actionTypes from '../constants/actionTypes'

export function createCourse(course) {
  return { type: actionTypes.CREATE_COURSE, course };
}
