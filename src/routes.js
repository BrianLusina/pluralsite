/**
 * @author lusinabrian on 30/05/17.
 * @notes: Used to configure routes
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import CoursePage from './components/course/CoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="course" component={CoursePage}/>
    <Route path="courses" component={ManageCoursePage}/>
    <Route path="course:id" component={ManageCoursePage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
