import React, { Component } from "react";

class MyRooms extends Component {
  constructor(props) {
    super(props);
    this.state = { userFlat: flatDoc };
  }
  render() {
    console.log(userFlat);
    return (
      <section>
        <h2>My flats</h2>
      </section>
    );
  }
}

export default MyRooms;
