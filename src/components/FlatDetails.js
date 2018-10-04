import React, { Component } from "react";
import api from "../api";
import { Link, Redirect } from "react-router-dom";

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
      picture: [],
      deleteSuccess: false
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

  deleteClick() {
    const { params } = this.props.match;
    const { deleteSuccess } = this.state;

    api
      .delete(`/flats/${params.flatId}`)
      .then(() => {
        this.setState({ deleteSuccess: true });
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was an error");
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
      picture,
      deleteSuccess
    } = this.state;

    console.log("delete success : ", deleteSuccess);
    if (deleteSuccess) {
      return <Redirect to={`/my-flats`} />;
    }

    return (
      <section>
        <h2>Flat details</h2>
        {picture.map((onePic, index) => {
          return <img key={index} className="avatar-preview" src={onePic} />;
        })}

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

        <Link to={`/flats/${_id}/edit`}>Edit this Flat</Link>
        <br />
        <button onClick={() => this.deleteClick()}>Delete this flat</button>
      </section>
    );
  }
}

export default FlatDetails;
