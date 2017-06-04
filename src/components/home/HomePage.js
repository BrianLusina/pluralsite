/**
 * @author lusinabrian on 30/05/17.
 * @notes: Home page component
 *
 */
import React, { Component } from 'react';
import { Link } from 'react-router';


export default class HomePage extends Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>PluralVision</h1>
        <p>PluralVision Demo</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}
