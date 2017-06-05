/**
 * @author lusinabrian on 04/06/17.
 * @notes: a single course list row
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const CourseListRow = ({key, course}) => {
  return(
    <tr key={key}>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  key: PropTypes.number.isRequired,
  course: PropTypes.object.isRequired
};

export default CourseListRow;
