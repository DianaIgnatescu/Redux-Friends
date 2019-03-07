import React from 'react';

const handleClick = loginRequest => (event) => {
  event.preventDefault();
  let username = '';
  let password = '';
  event.target.parentNode.childNodes.forEach((childNode) => {
    if (childNode.name === 'username') {
      username = childNode.value;
    } else if (childNode.name === 'password') {
      password = childNode.value;
    }
  });
  if (username && password) {
    loginRequest(username, password);
  }
};

const Login = props => (
  <form>
    <input name="username" type="text" placeholder="username" />
    <input name="password" type="text" placeholder="password" />
    <button type="button" onClick={handleClick(props.loginRequest)}>Log In</button>
  </form>
);

export default Login;
