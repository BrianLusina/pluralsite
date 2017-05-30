/**
 * @author lusinabrian on 30/05/17.
 * @notes: App component
 */
import React, { Component, PropTypes } from 'react';

export default class App extends Component{
  render(){
    return(
      <div className="container-fluid">
        <header>Header comes here...</header>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

