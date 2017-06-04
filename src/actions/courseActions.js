/**
 * @author lusinabrian on 04/06/17.
 * @notes: create course actions
 */

/**
 * Action to creates a course
 * @param course
 * @returns {object} returns an object*/
export function createCourse(course){
  return { type: "CREATE_COURSE", course};
}
