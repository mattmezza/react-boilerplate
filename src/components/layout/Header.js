import React from 'react';

import logo from '../../media/logo.png';

class Header extends React.Component {

  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Datasound boilerplate</h2>
      </div>
    );
  }

}


export default Header;
