import React, { Component } from "react";
import Navigation from "./Navigation";
import {Link} from 'react-router-dom';

import api from '../api.js';

class RoomList extends Component {
  constructor (props){
    super(props);
    
    this.state={
      rooms: []
    };
  }

  componentDidMount() {
    api.get("/flats")
    .then(response => {
      this.setState({ rooms: response.data })
    })
    .catch(err => {
      console.log(err);
      alert("Something went wrong!");
    })


  }

  render() {
    const {rooms} = this.state;
    const {currentUser}= this.props;
    console.log("currentUser", currentUser);

    return (
      <section>
        <h2>Room list</h2>
        <section>
        <input type="search" />
      </section>

        <ul>
          {
            rooms.map(oneRoom => 
             <li key={oneRoom._id}>
              {currentUser && (
                <button>Room details </button>
              )}
             <h1>{oneRoom.housing}</h1>
             </li>
              )
          }
        </ul>

      </section>
    );
  }
}

export default RoomList;
