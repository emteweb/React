import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    // we define a connection with 'open' method - arg: method,address,async
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    // we send the request
    xhr.send();
    // after getting back response
    xhr.onload = () => {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response)
        this.setState({ users })
      }
      //console.log(xhr.status)
      //console.log(xhr.response)
    }

  }

  render() {

    const users = this.state.users.map(user => (
      <div key={user.id}>
        <h4>{user.name}</h4>
        <p>{user.address.city}</p>
      </div>
    ))
    return (
      <div>
        {users}
      </div>
    );
  }
}

export default App;
