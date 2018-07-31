import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

import Navigation from '../Navigation/Navigation';
import Users from '../Users/Users';
import Courses from '../Courses/Courses';

const layout = () => (
  <Auxiliary>
    <header>
      <Navigation/>
    </header>
    <main>
      <Switch>
        <Route path="/users" component={ Users } />
        <Route path="/courses" component={ Courses } />
        <Redirect from="/all-courses" to="/courses"/>
        <Route render={ () => <h1>Not found</h1> }/>
      </Switch>
    </main>
  </Auxiliary>
);

export default layout;
