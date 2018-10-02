import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";

class MyFlats extends Component {
  constructor(props) {
    super(props);

    this.state = { userFlat: [] };
  }

  componentDidMount() {
    api
      .get("/my-flats")
      .then(response => {
        this.setState({ userFlat: response.data });
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong!");
      });
  }

  render() {
    const { userFlat } = this.state;
    console.log("userFlat", userFlat);
    return (
      <section>
        <h2>My flats</h2>
        {userFlat.map(oneFlat => (
          <div key={oneFlat._id}>
            <h3>
              {oneFlat.housing} {oneFlat.roomNum} pièces de {oneFlat.area}
              m²
            </h3>
            <p>
              PARIS {oneFlat.zipCode} | {oneFlat.roomMate} autres personnes
            </p>
            <p>{oneFlat.description}</p>
          </div>
        ))}
        <Link to="/flats-add">Add a Flat</Link>
      </section>
    );
  }
}

export default MyFlats;
