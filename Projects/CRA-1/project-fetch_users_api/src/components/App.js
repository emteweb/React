import React, { Component } from 'react';
import './App.css';
import ButtonFetchUsers from './ButtonFetchUsers';
import UsersList from './UsersList';

const API = 'https://randomuser.me/api/?results=5';

class App extends Component {

  state = {
    users: null
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
        //console.log(data.results[0].name.first)
        this.setState({
          users: data.results
        })
      })
      .catch(error => console.log(error + " - something went wrong"))
  }

  render() {
    const users = this.state.users;
    return (
      <div >
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
