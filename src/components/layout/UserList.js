import React from 'react';

class UserList extends React.Component {

  render() {
    return (
      <div>
        <p>User list:</p>
        <ul className="user-list">
          <li>Matteo</li>
          <li>Ciccio</li>
          <li>Tizio</li>
        </ul>
      </div>
    );
  }
}

export default UserList;
