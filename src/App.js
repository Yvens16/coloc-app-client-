import { Switch, Route } from "react-router-dom";
import api from "./api";
import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <header>
          <h1>FlatSharing</h1>
        </header>

        <Home />
      </main>
    );
  }
}

export default App;
