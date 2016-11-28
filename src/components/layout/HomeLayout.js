import React from 'react';

import TodoApp from '../todo/TodoApp';

class HomeLayout extends React.Component {
  render() {
    return (
      <div className="App">

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div><TodoApp /></div>
      </div>
    );
  }
}

export default HomeLayout;
