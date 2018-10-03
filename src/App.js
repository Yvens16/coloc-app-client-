import api from "./api";
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import RoomList from "./components/RoomList";
import Navigation from "./components/Navigation";
import MyFlats from "./components/MyFlats";

//MDBootstrap
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import AddFlats from "./components/AddFlats";
import FlatDetails from "./components/FlatDetails";
import FlatEdit from "./components/FlatEdit";
import ProfileEdit from "./components/ProfileEdit";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentUser: null,
      rooms: [],
    };
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
          <Navigation currentUser={currentUser} />
          {currentUser && (
            <span>
              <b> Hello {currentUser.firstName} ! </b>
              <Link to="/">
                <button onClick={() => this.logoutClick()}>Log Out</button>
              </Link>
            </span>
          )}
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/signup"
            render={() => (
              <SignUp
                onSignUp={userDoc => this.updateUser(userDoc)}
                currentUser={currentUser}
              />
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
          <Route
            path="/room-list"
            render={() => <RoomList currentUser={currentUser} />}
          />
          <Route path="/my-flats" component={MyFlats} />
          <Route path="/flats-add" component={AddFlats} />
          <Route exact path="/flats/:flatId" component={FlatDetails} />
          <Route exact path="/flats/:flatId/edit" component={FlatEdit} />
          <Route path="/profile/:profileId" component={ProfileEdit} />
        </Switch>
      </main>
    );
  }
}

export default App;
