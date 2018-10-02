import React, { Component } from "react";
import api from "../api.js";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", originalPassword: "" };
  }

  updateInput(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    api
      .post("/login", this.state)
      .then(response => {
        console.log("LOGIN ", response.data);
        const { onLogin } = this.props;
        onLogin(response.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was an error.");
      });
  }

  render() {
    const { currentUser } = this.props;
    const { email, originalPassword } = this.state;

    if (currentUser && currentUser.role === "normal") {
      console.log(currentUser.role);
      return <Redirect to="/room-list" />;
    } else if (currentUser && currentUser.role === "owner") {
      return <Redirect to="/my-rooms" />;
    }

    return (
      <div className="login">
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Email:{" "}
            <input
              type="email"
              placeholder="IanSolo@gmail.com"
              name="email"
              value={email}
              onChange={event => this.updateInput(event)}
            />
          </label>

          <label>
            Password:{" "}
            <input
              type="password"
              placeholder="Keep it secret from the sith "
              name="originalPassword"
              value={originalPassword}
              onChange={event => this.updateInput(event)}
            />
          </label>
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
