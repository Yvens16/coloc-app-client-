import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";

class FlatDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      housing: "",
      streetNum: "",
      address: "",
      zipCode: "",
      rent: "",
      roomMate: "",
      roomNum: "",
      area: "",
      description: "",
      picture: []
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    api
      .get(`/flats/${params.flatId}`)
      .then(response => {
        console.log("Flat details ", response.data);
        // when we get the data back setState() to update
        this.setState(response.data);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Error with flat details");
      });
  }

  render() {
    const {
      _id,
      housing,
      streetNum,
      address,
      zipCode,
      rent,
      roomMate,
      roomNum,
      area,
      description,
      picture
    } = this.state;

    return (
      <section>
        <h2>Flat details</h2>
        <h3>
          {housing} {roomNum} pièces de {area}
        </h3>
        <p>Address : {address}</p>
        <p>
          PARIS {zipCode} | {roomMate} autres personnes
        </p>
        <p>{description}</p>
        <p>
          <b>{rent} €</b>
        </p>
        {picture.map((onePic, index) => (
          <img key={index} src={onePic.picture} />
        ))}
      </section>
    );
  }
}

export default FlatDetails;
