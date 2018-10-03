import React, { Component } from "react";
import Navigation from "./Navigation";
import {Link} from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import api from '../api.js';
import Search from "./Search";

class RoomList extends Component {
  constructor (props){
    super(props);
    
    this.state={
      rooms: [],
      roomsBackUp: [],
      userInput:''
    };
  }

  
  componentDidMount() {
    api.get("/flats")
    .then(response => {
      this.setState({ rooms: response.data, roomsBackUp: response.data })
      console.log('[response.data]', response.data);
    })
    .catch(err => {
      console.log(err);
      alert("Something went wrong!");
    })
    
    
  }
  
  updateZipCode(event){
    const inputTag = event.target;
    const roomsCopy = this.state.roomsBackUp;
    console.log( 'ROOMS COPY', roomsCopy );
    const zipResult = roomsCopy.filter(oneRoom => {
      return oneRoom.zipCode.toString().includes(inputTag.value) ||  oneRoom.housing.toString().includes(inputTag.value)
    }
      )
      console.log( zipResult )
      this.setState({ rooms: zipResult, userInput: inputTag.value })
  }
   
  render() {
    const {rooms, userInput} = this.state;
    const {currentUser}= this.props;

    return (
      <section>
      <Search
      inputValue={userInput}
      onZipSearch= {event => this.updateZipCode(event)}
      />
        <h2>Room list</h2>
       

          {
            rooms
            .map(oneRoom => 
             <li key={oneRoom._id}>
            <img src={oneRoom.picture[0]} />
             <h1> A {oneRoom.roomNum} rooms {oneRoom.housing} of {oneRoom.area} m2  </h1>
             <b> {oneRoom.zipCode} | {oneRoom.roomMate} other room-mates </b>
             <p> {oneRoom.description} </p>
             <h1> <b> {oneRoom.rent}€ </b> </h1>
            {/* {
             oneRoom.picture.map((onePic, index)=>
             <img key={index} className="avatar-preview" src={onePic} />
             )
             }*/}
              {currentUser && (
                <button>Room details </button>
              )}
             </li>

          
              )
          }
        

      </section>
    );
  }
}

export default RoomList;

// .indexOf(filterNum)
              