/**
 * @author lusinabrian on 30/05/17.
 * @notes: Course page component
 */

import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';


class CoursePage extends Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      course: {title: ""}
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  /**
   * Changes the title of the course, this updates the state of this component
   * @param {object} event object we shall use to derive data from element
   * */
  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course: course
    });
  }

  /**
   * Performs an action when clicked. This is the callback called when the submit button
   * is clicked
   * @param {object} event*/
  onClickSave(event){
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index){
    return (
      <div key={index}>
        {course.title}
      </div>
    );
  }

  render(){
    return(
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}

CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

/**
 * Maps state of props in this component to store of component
 * @param ownProps this components own props
 * @param state within redux store
 * @return {Object} props to be used in this component
 * */
function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

/**
 * Fires actions to redux store
 * This will be used to fire an action to the redux store
 * @param dispatch
 * */
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(courseActions, dispatch)
  };
}

/**
 * Connect this component to the store and map its props to the state of the store
 * */
export default connect(mapStateToProps ,mapDispatchToProps)(CoursePage);
