import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle } from "react-materialize";

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
      <section>
        <Search
          inputValue={userInput}
          onZipSearch={event => this.updateZipCode(event)}
        />
        <h2>Room list</h2>

        {rooms.map(oneRoom => (
          <li key={oneRoom._id}>
            <Card
              className="medium"
              header={
                <CardTitle image={oneRoom.picture[0]}>
                  A {oneRoom.roomNum} rooms {oneRoom.housing} of {oneRoom.area}{" "}
                  m2
                </CardTitle>
              }
              actions={[
                <Link
                  to={{
                    pathname: `/room-details/${oneRoom._id}`,
                    state: { oneRoom: "oneRoom" }
                  }}
                >
                  Rooms details
                </Link>
              ]}
            >
              <b>
                {oneRoom.zipCode} | {oneRoom.roomMate} other room-mates
              </b>
              <h1>
                <b> {oneRoom.rent}€ </b>
              </h1>
              {currentUser && (
                <button onClick={() => this.handleLike(oneRoom)}>like </button>
              )}
              <p> {oneRoom.description} </p>
            </Card>
          </li>
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
