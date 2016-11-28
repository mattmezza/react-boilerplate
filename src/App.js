import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from './components/layout/MainLayout';
import SearchLayout from './components/layout/SearchLayout';
import About from './components/layout/About';
import UserList from './components/layout/UserList';
import HomeLayout from './components/layout/HomeLayout';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={HomeLayout} />
          <Route path="about" component={About} />
          <Route component={SearchLayout}>
            <Route path="users" component={UserList} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default App;
