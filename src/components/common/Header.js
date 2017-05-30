/**
 * @author lusinabrian on 30/05/17.
 * @notes: Common header in all components
 */

import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      { "|" }
      <Link to="/about" activeClassName="active" >About</Link>
    </nav>
  );
};

export default Header;
