import api from "./api";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import RoomList from "./components/RoomList";
import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";

//MDBootstrap
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentUser: null };
  }

  updateUser(userDoc) {
    this.setState({ currentUser: userDoc });
  }

  componentDidMount() {
    // check with the backend to see if we are already logged in
    api
      .get("/checklogin")
      .then(response => {
        console.log("Check LOG IN ", response.data);
        this.updateUser(response.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was an error");
      });
  }

  logoutClick() {
    api
      .delete("/logout")
      .then(() => {
        this.updateUser(null);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was an error");
      });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <main>
        <header>
          <h1>FlatSharing</h1>
          <Navigation currentUser={currentUser} />
          {currentUser && (
            <span>
              <b>{currentUser.email}</b>
              <button onClick={() => this.logoutClick()}>Log Out</button>
            </span>
          )}
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/signup"
            render={() => (
              <SignUp onSignUp={userDoc => this.updateUser(userDoc)} />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <Login
                onLogin={userDoc => this.updateUser(userDoc)}
                currentUser={currentUser}
              />
            )}
          />
          <Route path="/room-list" component={RoomList} />
        </Switch>
      </main>
    );
  }
}

export default App;
