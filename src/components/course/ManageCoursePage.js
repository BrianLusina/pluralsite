import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';


class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  /**
   * Updates course state
   * @param event
   * */
  updateCourseState(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({
      course: course
    });
  }

  /**
   * Saves a course
   * */
  saveCourse(event){
    event.preventDefault();
    this.setState({
      saving: true
    });
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
      });

    this.setState({
      saving: false
    });
  }

  redirect(){
    this.setState({saving: false});
    toastr.success("Course saved");
    this.context.router.push("/courses");
  }

  /**
   * Updates the state of the application when props change
   * @param {Object} nextProps
   */
  componentWillReceiveProps(nextProps){
    if(this.props.course.id !== nextProps.course.id){
      this.setState({
        course: Object.assign({}, nextProps.course)
      });
    }
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        course={this.state.course}
        onSave={this.saveCourse}
        onChange={this.updateCourseState}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

/**
 * Context types
 * telling React that router will be needed as context*/
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id = id);
  if(course.length){
    // since filter returns an array, have to grab the first element
    return course[0];
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  // get the course id from the router
  // path /course/:id
  const courseId = ownProps.params.id;
  let course = {id: "", watchHref:"", title:"", authorId:"", length:"", category:""};

  if(courseId && state.courses.length > 0){
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedDropDown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + " " + author.lastName
    };
  });

  return {
    course: state,
    authors: authorsFormattedDropDown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
