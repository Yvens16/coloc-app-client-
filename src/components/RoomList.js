import React, { Component } from "react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

class RoomList extends Component {
  render() {
    return (
      <section>
        <h2>Room list</h2>
        <SearchBar />
      </section>
    );
  }
}

export default RoomList;
