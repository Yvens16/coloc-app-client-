import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import Redirect from "react-router-dom/Redirect";
import { Card, CardTitle, Button } from "react-materialize";

class MyFlats extends Component {
  constructor(props) {
    super(props);

    this.state = { userFlat: [] };
  }

  componentDidMount() {
    api
      .get("/my-flats")
      .then(response => {
        this.setState({ userFlat: response.data });
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong!");
      });
  }

  render() {
    const { userFlat } = this.state;
    const { currentUser } = this.props;

    // if (currentUser) {
    //   if (currentUser.role === "normal") {
    //     <Redirect to="/" />;
    //   }
    // }

    return (
      <section>
        <h2>My flats</h2>
        {userFlat.map(oneFlat => (
          <Card
            key={oneFlat._id}
            header={
              <CardTitle reveal image={oneFlat.picture[0]} waves="light" />
            }
            title={`A ${oneFlat.roomNum} ${oneFlat.housing} of ${
              oneFlat.area
            } m²`}
            reveal={<p>{oneFlat.description}</p>}
          >
            <p>
              <Link to={`/flats/${oneFlat._id}`}>
                <Button>See details</Button>
              </Link>
            </p>
          </Card>
        ))}
        {/* //   <div key={oneFlat._id}>
        //     <img className="avatar-preview" src={oneFlat.picture[0]} />
        //     <h3>
        //       {oneFlat.housing} {oneFlat.roomNum} pièces de {oneFlat.area}
        //       m²
        //     </h3>
        //     <p>
        //       PARIS {oneFlat.zipCode} | {oneFlat.roomMate} autres personnes
        //     </p>
        //     <p>{oneFlat.description}</p>
        //     <p>
        //       <b>{oneFlat.rent} €</b>
        //     </p>
        //     <Link to={`/flats/${oneFlat._id}`}>See details</Link>
        //   </div> */}

        <Link to="/flats-add">
          <Button id="btn-add-flat">Add a flat</Button>
        </Link>
      </section>
    );
  }
}

export default MyFlats;
