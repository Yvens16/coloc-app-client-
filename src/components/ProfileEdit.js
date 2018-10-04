import React from 'react';
import api from "../api";
import { Redirect } from "react-router-dom";

class ProfileEdit extends React.Component{
  constructor(props){
    super(props)

    this.originalImage = "";
    this.state= {
      lastName:"",
      firstName:"",
      age:"",
      sexe:"Male",
      job:"Employed",
      presentation:"",
      avatar:"",
      budget:"",
      email:"",
      phone:"",
      originalPassword:"",
      isSubmitSuccess: false
    }
  }

  componentDidMount() {
    const { params } = this.props.match;

    api
    .get(`/profile/${params.profileId}`)
    .then(response =>{
      console.log('[response]', response);
      console.log('[PROFILE EDIT]', response.data);
    })
    .catch(err => {
      console.log('[ERR]', err);
      alert("Sorry, error with edit form");
    })
  }

  updateInput(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
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
        const { imageUrl } = response.data[0];
        console.log(response.data);
        this.setState({ avatar: imageUrl });
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was an error. 💩");
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { params } = this.props.match;

    api
    .put(`/profile/${params.profileId}`, this.state)
    .then(response => {
      this.setState({ isSubmitSuccess: true});
    })
    .catch(err => {
      console.log(err);
      alert("Sorry! Something went wrong with edit form");
  });
}





  render(){
    const {
      lastName,
      firstName,
      age,
      sexe,
      job,
      presentation,
      avatar,
      budget,
      email,
      phone,
      originalPassword,
      isSubmitSuccess
    } = this.state; 

    if (isSubmitSuccess) {
      // redirect back to the phone details page if the submission worked!
      const { params } = this.props.match;
      return <Redirect to={`/profile/${params.profileId}`} />;
    }
    return (
      <section>
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
          <br/>
          <label>
          Introduce yourself:{" "}
          <textarea
            value={presentation}
            name="presentation"
            id=""
            cols="30"
            rows="10"
            placeholder="Be interresting, Be attractive, Be cool, Be who you are 😎"
            onChange={event => this.updateInput(event)}
          />
        </label>
        <label>
          Budget:{" "}
          <input
            type="number"
            value={budget}
            name="budget"
            placeholder="Example: 700"
            onChange={event => this.updateInput(event)}
          />{" "}
          €
        </label>
        <br/>
          <button>Saves changes</button>
            </form>
      </section>
    )
  }

}

export default ProfileEdit;