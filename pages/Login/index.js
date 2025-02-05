import { Component } from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import './index.css';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  };

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 });
    this.props.history.replace('/');
  };

  onSubmitFailure = errorMsg => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userDetails),
    });
    const data = await response.json();
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  render() {
    const { username, password, showSubmitError, errorMsg } = this.state;
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h1>Login</h1>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={this.onChangeUsername} required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={this.onChangePassword} required />
          <button type="submit">Login</button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default LoginForm;
