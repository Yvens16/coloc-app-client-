import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  CardGroup,
  Button
} from "mdbreact";

class WhosLike extends Component {
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
      likes: [],
      idOwner: ""
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    console.log("params : ", params);
    api
      .get(`/my-likes/${params.ownerId}`)
      .then(response => {
        console.log("response:  ", response.data);
        this.setState({ likes: response.data.likes, idOwner: response._id });
      })
      .catch(err => {
        console.log(err);
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
      budget,
      email,
      phone,
      likes,
      idOwner
    } = this.state;

    return (
      <section>
        <h2>Who likes my flat?</h2>
        <CardGroup>
          {likes.map(oneLike => {
            return (
              <Card key={oneLike._id}>
                <CardImage
                  src={oneLike.avatar}
                  alt="Card image cap"
                  top
                  hover
                  overlay="white-slight"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {oneLike.firstName} {oneLike.lastName}
                  </CardTitle>
                  <CardText tag="h5">
                    {oneLike.age} years | {oneLike.job}
                  </CardText>

                  <CardText>{oneLike.presentation}</CardText>
                  <CardText>Phone: {oneLike.phone}</CardText>
                  <CardText>Email: {oneLike.email}</CardText>
                </CardBody>
              </Card>
            );
          })}
        </CardGroup>

        {/* {likes.map(oneLike => (
          <div key={oneLike._id}>
            <img src={oneLike.avatar} />
            <h3>
              {oneLike.firstName} {oneLike.lastName}
            </h3>
            <p>
              {oneLike.age} years | {oneLike.job}
            </p>
            <p>{oneLike.presentation}</p>
            <p>
              {oneLike.phone} | {oneLike.email}
            </p>
            <p>
              Budget: <b>{oneLike.budget} €</b>
            </p>
          </div>
        ))} */}

        {/* <Link to={`/flats/${}`}>Back to details</Link> */}
      </section>
    );
  }
}

export default WhosLike;
