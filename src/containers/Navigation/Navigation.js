import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const navigation = () => {
  return (
    <nav className="Navigation">
      <ul>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
      </ul>
    </nav>
  );
};

export default navigation;
