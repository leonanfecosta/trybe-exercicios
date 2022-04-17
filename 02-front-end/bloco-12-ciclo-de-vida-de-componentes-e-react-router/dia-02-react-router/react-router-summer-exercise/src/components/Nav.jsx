import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render () {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/search">Search</Link>
      </nav>
    );
  }
}

export default Nav;
