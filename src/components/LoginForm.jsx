import React from 'react';
import { AuthService } from '../services/auth';

export default class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  authService = new AuthService();

  signIn = async () => {
    await this.authService.signIn(this.state.email, this.state.password);
  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    this.signIn();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email Address:</label> <br />
        <input type='email' name='email' value={this.state.value} onChange={this.handleChange} required /> <br />
        <label>Password:</label> <br />
        <input type='password' name='password' value={this.state.value} onChange={this.handleChange} required /> <br />
        <input type='submit' value='Log in' />
      </form>
    );
  }
}
