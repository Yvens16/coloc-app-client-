import React, { Component } from "react";
import api from "../api.js";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      sexe: "Male",
      job: "Employed",
      presentation: "",
      avatar: "",
      budget: "",
      email: "",
      phone: "",
      originalPassword: "",
      role: ""
    };
  }

  updateInput(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    api
      .post("/signup", this.state)
      .then(response => {
        console.log("SIGNUP ", response.data);
        const { onSignUp } = this.props;
        onSignUp(response.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was a problem.");
      });
  }

  render() {
    const {
      firstName,
      lastName,
      age,
      sexe,
      job,
      presentation,
      avatar,
      email,
      phone,
      originalPassword,
      role
    } = this.state;

    return (
      <section>
        <h2>Sign Up</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Last name:{" "}
            <input
              type="text"
              placeholder="Lastname"
              name="lastName"
              value={lastName}
              onChange={event => this.updateInput(event)}
            />
          </label>
          <br />
          <label>
            First name:{" "}
            <input
              type="text"
              placeholder="Firstname"
              name="firstName"
              value={firstName}
              onChange={event => this.updateInput(event)}
            />
          </label>
          <br />
          <label>
            Age:{" "}
            <input
              type="number"
              placeholder="17 to 99"
              name="age"
              value={age}
              onChange={event => this.updateInput(event)}
            />
          </label>
          <br />
          <label>
            Sexe:
            <select
              value={sexe}
              onChange={event => this.updateInput(event)}
              name="sexe"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <br />
          <label>
            Job:{" "}
            <select
              value={job}
              onChange={event => this.updateInput(event)}
              name="job"
            >
              <option>Employed</option>
              <option>Unemployed</option>
              <option>Student</option>
              <option>Retired</option>
              <option>Other</option>
            </select>
          </label>
          <br />
          <label>
            Email:{" "}
            <input
              type="email"
              placeholder="email@example.com"
              name="email"
              value={email}
              onChange={event => this.updateInput(event)}
            />
          </label>
          <br />
          <label>
            Phone:{" "}
            <input
              type="text"
              placeholder="17 to 99"
              name="phone"
              value={phone}
              onChange={event => this.updateInput(event)}
            />
          </label>
          <br />
          <label>
            Picture: <input type="file" />
          </label>
          <br />
          <label>
            Password:{" "}
            <input
              type="password"
              placeholder="It's a secret"
              name="originalPassword"
              value={originalPassword}
              onChange={event => this.updateInput(event)}
            />
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="normal"
              name="role"
              checked={role === "normal"}
              onChange={event => this.updateInput(event)}
            />
            I'm looking for a flatsharing
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="owner"
              name="role"
              checked={role === "owner"}
              onChange={event => this.updateInput(event)}
            />
            I offer a flatsharing
          </label>
          <br />
          <button>Signup Now!</button>
        </form>
      </section>
    );
  }
}

export default SignUp;
