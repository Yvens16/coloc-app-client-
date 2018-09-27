import React, { Component } from "react";

import api from "../api.js";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fisrtName: "",
      lastName: "",
      age: "",
      sexe: "",
      job: "",
      presentation: "",
      avatar: "",
      budget: "",
      email: "",
      phone: "",
      originalPassword: "",
      role: ""
    };
  }
  render() {
    return (
      <section>
        <h2>Sign Up</h2>
        <form>
          <label>
            Last name: <input type="text" placeholder="Lastname" />
          </label>

          <label>
            fisrt name: <input type="text" placeholder="Firstname" />
          </label>

          <label>
            Age: <input type="number" placeholder="17 to 99" />
          </label>

          <label>
            Sexe:{" "}
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </label>

          <label>
            Job:{" "}
            <select>
              <option>Employed</option>
              <option>Unemployed</option>
              <option>Student</option>
              <option>Retired</option>
              <option>Other</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default SignUp;
