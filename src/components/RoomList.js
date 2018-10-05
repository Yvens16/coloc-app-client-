import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImage, CardBody, CardTitle, CardText, Button } from 'mdbreact';


import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import api from "../api.js";
import Search from "./Search";

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      roomsBackUp: [],
      userInput: ""
    };
  }

  componentDidMount() {
    api
      .get("/flats")
      .then(response => {
        this.setState({ rooms: response.data, roomsBackUp: response.data });
        console.log("[response.data]", response.data);
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong!");
      });
  }

  updateZipCode(event) {
    const inputTag = event.target;
    const roomsCopy = this.state.roomsBackUp;
    console.log("ROOMS COPY", roomsCopy);
    const zipResult = roomsCopy.filter(oneRoom => {
      return (
        oneRoom.zipCode.toString().includes(inputTag.value) ||
        oneRoom.housing.toString().includes(inputTag.value)
      );
    });
    console.log(zipResult);
    this.setState({ rooms: zipResult, userInput: inputTag.value });
  }

  handleLike(oneRoom) {
    api
      .post(`/likes/${oneRoom.owner._id}`, {})
      .then(response => console.log("[RESPONSE]", response.data))
      .catch(err => {
        console.log("[err]", err);
      });
  }

  render() {
    const { rooms, userInput } = this.state;
    const { currentUser } = this.props;

    return (
      <section className="background">
        <Search
          inputValue={userInput}
          onZipSearch={event => this.updateZipCode(event)}
        />
        <div className="wrapper">
        <div className="center">
        <h2 className="room-list">Room list</h2>
        </div>
        </div>

        {rooms.map(oneRoom => (
          <Card reverse className="card" key={oneRoom._id} >
          <CardImage cascade className="img-fluid" className="img" src={oneRoom.picture[0]} />
          <CardBody cascade>
              <CardTitle>A {oneRoom.roomNum} rooms {oneRoom.housing} of {oneRoom.area} m2
              <p>{oneRoom.zipCode} | {oneRoom.roomMate} other room-mates</p>
              {oneRoom.rent}€
              </CardTitle>
              <CardText>{oneRoom.description}</CardText>
               <Link className="btn1"  
              to={{
                pathname: `/room-details/${oneRoom._id}`,
                state: { oneRoom: "oneRoom" }
              }}
            > Details </Link>
          </CardBody>
      </Card>
        ))}
      </section>
    );
  }
}

export default RoomList;

// .indexOf(filterNum)
{
  /* {
             oneRoom.picture.map((onePic, index)=>
             <img key={index} className="avatar-preview" src={onePic} />
             )
             }*/
}
