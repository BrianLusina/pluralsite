/**
 * @author lusinabrian on 30/05/17.
 * @notes: Course page
 */

import React, { Component, PropTypes} from 'react';

export default class CoursePage extends Component{
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
    alert(`saving title ${this.state.course.title}`);
  }

  render(){
    return(
      <div>
        <h1>Courses</h1>
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

};
