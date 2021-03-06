import React, { Component } from 'react';
import './App.css';
import ButtonFetchUsers from './ButtonFetchUsers';
import UsersList from './UsersList';

const API = 'https://randomuser.me/api/?results=1';

class App extends Component {

  state = {
    users: []
  }

  handleDataFetch = () => {
    //console.log("Click")
    fetch(API) // 'fetch' method returns a PROMISE and only then we can continue with 'THEN'
      .then(response => {
        if (response.ok) {
          //console.log(response)
          return response
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        const user = data.results;
        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }))
      })
      .catch(error => console.log(error + " - something went wrong"))
  }

  render() {
    const users = this.state.users;
    return (
      <div class="mainDiv">
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users.length > 0 ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
