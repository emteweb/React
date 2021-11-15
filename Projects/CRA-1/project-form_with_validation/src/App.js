import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    username: "",
    email: "",
    pass: "",
    accept: false,
    message: '',

    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false
    }
  }

  messages = {
    username_incorrect: 'Username must be at least 3 characters long andd cannot include spaces',
    email_incorrect: 'You need to use @ sign',
    password_incorrect: 'Password must consist of 8 characters',
    accept_incorrect: 'You have to agree to Terms and Conditions'
  }

  handleChange = (e) => {

    const name = e.target.name; // we create var 'name' to which we assign a value from a form field
    // that way, 'handleChange' method knows which input field we use
    const type = e.target.type;
    console.log(type)

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;

      this.setState({
        [name]: value // if we want to use variable 'name' we use '[]'
      })
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      console.log(checked)
      this.setState({
        [name]: checked // if we want to use variable 'name' we use '[]'
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const validation = this.formValidate()
    console.log(validation)
    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        pass: "",
        accept: false,
        message: 'The form has been successfully sent',

        errors: {
          username: false,
          email: false,
          pass: false,
          accept: false
        }
      })
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          pass: !validation.password,
          accept: !validation.accept
        }
      })
    }
  }

  formValidate = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;

    if (this.state.username.length > 3 && this.state.username.indexOf(' ') === -1) {
      username = true;
    }
    if (this.state.email.indexOf('@') !== -1) {
      email = true;
    }
    if (this.state.pass.length >= 8) {
      password = true;
    }
    if (this.state.accept) {
      accept = true
    }
    if (username && email && password && accept) {
      correct = true
    }
    return ({
      username,
      email,
      password,
      accept,
      correct
    }
    )
  }
  componentDidUpdate() {
    if (this.state.message !== '') {
      setTimeout(() => {
        this.setState({
          message: ''
        })
      }, 3000)
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate action="">

          <label htmlFor="user"> Your name
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
            {this.state.errors.username && <span> {this.messages.username_incorrect} </span>}
          </label>

          <label htmlFor="email"> Your email
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
            {this.state.errors.email && <span> {this.messages.email_incorrect} </span>}
          </label>

          <label htmlFor="password"> Your password
            <input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange} />
            {this.state.errors.pass && <span> {this.messages.password_incorrect} </span>}
          </label>

          <label htmlFor="accept">
            <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange} /> Accept the conditions
          </label>
          {this.state.errors.accept && <span> {this.messages.accept_incorrect} </span>}
          <button>Sign up</button>
        </form>
        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}

export default App;
