import api from "./api";
import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

class App extends Component {
  constructor(props) {
    super(props);
  }

  updateUser(userDoc) {
    this.setState({ currentUser: userDoc });
  }

  render() {
    return (
      <main>
        <header>
          <h1>FlatSharing</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/signup"
            render={() => (
              <SignUp onSignUp={userDoc => this.updateUser(userDoc)} />
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
