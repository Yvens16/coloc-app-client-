import api from "./api";
import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import OwnerSign from "./components/OwnerSign";
import UserSign from "./components/UserSign";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <Navigation />
        {/*<Home />*/}
        {/*<OwnerSign />*/}
        <UserSign />

      </main>
    );
  }
}

export default App;
