import { Component } from 'react';
import './index.css';

class Register extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    showSubmitError: false,
    errorMsg: '',
  };

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  onSubmitSuccess = () => {
    this.props.history.push('/login');
  };

  onSubmitFailure = errorMsg => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async event => {
    event.preventDefault();
    const { username, password, email } = this.state;
    const userDetails = { username, password, email };
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userDetails),
    });
    const data = await response.json();
    if (response.ok) {
      this.onSubmitSuccess();
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  render() {
    const { username, password, email, showSubmitError, errorMsg } = this.state;

    return (
      <div className="register-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h1>Register</h1>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={this.onChangeUsername} required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={this.onChangePassword} required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={this.onChangeEmail} required />
          <button type="submit">Register</button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default Register;
