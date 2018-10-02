import React, { Component } from "react";

import api from "../api.js";

import { Link } from "react-router-dom";

import UserSign from "./UserSign.js";
import OwnerSign from "./OwnerSign.js";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.originalImage = "";
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
      role: "",

      housing: "Studio",
      streetNum: "",
      address: "",
      zipCode: "",
      rent: "",
      roomMate: "0",
      roomNum: "1",
      area: "",
      description: "",
      picture: []

      // display: "none",
      // displayOwner: "none"
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

        return api.post("/flats", this.state);
      })
      .then(response => {
        console.log("[Flat Creation] ", response.data);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was a problem.");
      });
  }

  updateImage(event) {
    const { files } = event.target;
    console.log("File SELECTED", files[0]);
    console.log("files", files);

    if (!files[0]) {
      // reset back to the old image if you unselect your uploaded file
      this.setState({ avatar: this.originalImage });
      return;
    }
    // we need the "FormData" class to upload files to the API
    const uploadData = new FormData();
    // this name "imageFile" is connected with your backend route
    uploadData.append("imageFile", files[0]);
    console.log("[uploadData]", uploadData);
    api
      .post("/upload-image", uploadData)
      .then(response => {
        console.log("File UPLOADED", response.data);
        const { imageUrl } = response.data;
        this.setState({ avatar: imageUrl });
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was an error. 💩");
      });
  }

  multipleUpload = event => {
    // Intial FormData
    const formData = new FormData();
    //Push all the axios request promise into a single array
    //console.log("[FILE LIST]", event.target.files);

    const uploaders = Array.from(event.target.files).forEach(oneFile => {
      formData.append("oneFile", oneFile);
    });

    console.log("[FORMDATA]", formData);

    api
      .post("/upload-image", formData)
      .then(response => {
        console.log("[FILE UPLOADED]", response.data);
        const dataArray = response.data;
        const picsArray = [];
        dataArray.forEach(one => {
          return picsArray.push(one.imageUrl);
        });
        this.setState({ picture: picsArray });
      })
      .catch(err => {
        console.log(err);
        alert("error");
      });
  };

  // removeStyle() {
  //   this.setState({ display: this.state.display === "none" ? "" : "none",
  // });
  // };

  // removeStyleOwner() {
  //   this.setState({ displayOwner: this.state.displayOwner === "none" ? "" : "none",

  // });
  // };

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
      role,
      budget,
      streetNum,
      address,
      zipCode,
      rent,
      roomMate,
      housing,
      roomNum,
      area,
      description,
      picture
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
            Picture:{" "}
            <input type="file" onChange={event => this.updateImage(event)} />
          </label>
          <br />
          <img className="avatar-preview" src={avatar} />
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
              // onClick={() => this.removeStyle()}
            />
            I am looking for a flatsharing
          </label>
          <br />

          <label>
            <input
              type="radio"
              value="owner"
              name="role"
              checked={role === "owner"}
              onChange={event => this.updateInput(event)}
              //onClick={() => this.removeStyleOwner()}
            />
            I offer a flatsharing
          </label>
          <br />
          {role === "normal" && (
            <UserSign
              presentation={presentation}
              budget={budget}
              updateInput={event => this.updateInput(event)}
              style={this.state.display}
            />
          )}

          {role === "owner" && (
            <OwnerSign
              streetNum={streetNum}
              address={address}
              zipCode={zipCode}
              rent={rent}
              roomMate={roomMate}
              housing={housing}
              roomNum={roomNum}
              area={area}
              description={description}
              picture={picture}
              multipleUpload={event => this.multipleUpload(event)}
              updateInput={event => this.updateInput(event)}
              style={this.state.displayOwner}
            />
          )}
        </form>
      </section>
    );
  }
}

export default SignUp;
