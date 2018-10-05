import React, { Component } from "react";
import api from "../api";
import { Link, Redirect } from "react-router-dom";
import { number } from "prop-types";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  CardGroup
} from "mdbreact";
import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask,
  Container
} from "mdbreact";

class FlatDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      housing: "",
      streetNum: "",
      address: "",
      zipCode: "",
      rent: "",
      roomMate: "",
      roomNum: "",
      area: "",
      description: "",
      picture: [],
      owner: "",
      numLikes: "",
      deleteSuccess: false
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    const { owner } = this.state;

    console.log("params:  ", params);

    api
      .get(`/flats/${params.flatId}`)
      .then(response => {
        console.log("Flat details ", response.data);
        // when we get the data back setState() to update
        this.setState(response.data);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Error with flat details");
      });
  }

  componentDidUpdate() {
    const { owner } = this.state;

    if (!this.state.numLikes) {
      api
        .get(`/my-likes/${owner}`)
        .then(response => {
          console.log(response.data.likes);
          this.setState({ numLikes: response.data.likes.length });
        })
        .catch(err => console.log(err));
    }
  }

  deleteClick() {
    const { params } = this.props.match;
    const { deleteSuccess } = this.state;

    api
      .delete(`/flats/${params.flatId}`)
      .then(() => {
        this.setState({ deleteSuccess: true });
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was an error");
      });
  }

  render() {
    const {
      _id,
      housing,
      streetNum,
      address,
      zipCode,
      rent,
      roomMate,
      roomNum,
      area,
      description,
      picture,
      deleteSuccess,
      owner,
      numLikes
    } = this.state;

    console.log("delete success : ", deleteSuccess);
    if (deleteSuccess) {
      return <Redirect to={`/my-flats`} />;
    }

    return (
      <section>
        <Card reverse>
          <Container>
            <h4 className="mt-5 mb-2">FLAT DETAILS</h4>
            <Carousel
              activeItem={1}
              length={4}
              showControls={true}
              showIndicators={false}
              className="z-depth-1"
            >
              <CarouselInner>
                {picture.map((onePic, index) => {
                  return (
                    <CarouselItem key={index} itemId={index + 1}>
                      <View>
                        <img
                          className="d-block w-100"
                          src={onePic}
                          alt="Third slide"
                        />
                        <Mask overlay="black-slight" />
                      </View>
                      <CarouselCaption>
                        <h3 className="h3-responsive">PARIS {zipCode}</h3>
                        <p>
                          <b>{rent} €</b>
                        </p>
                      </CarouselCaption>
                    </CarouselItem>
                  );
                })}
              </CarouselInner>
            </Carousel>
          </Container>

          <CardBody cascade>
            <CardTitle>
              A {roomNum} room {housing} of {area} m²
            </CardTitle>
            <CardText>{description}</CardText>
            <CardText>Address : {address}</CardText>
            <CardText>{roomMate} other roommates</CardText>

            <Link to={`/whoslike/${owner}`}>
              <Button>{numLikes} Likes</Button>
            </Link>
            <Link to={`/flats/${_id}/edit`}>
              <Button>Edit this Flat</Button>
            </Link>
            <Button onClick={() => this.deleteClick()}>Delete</Button>
            <Link to="/my-flats">
              <Button>Back to my list</Button>
            </Link>
          </CardBody>
        </Card>
        {/* <h3>
          {housing} {roomNum} pièces de {area}
        </h3>
        <p>Address : {address}</p>
        <p>
          PARIS {zipCode} | {roomMate} other roommates
        </p>
        <p>{description}</p>
        <p>
          <b>{rent} €</b>
        </p>
        {picture.map((onePic, index) => (
          <img key={index} src={onePic.picture} />
        ))}
        <Link to={`/whoslike/${owner}`}>
          {numLikes && <button>{numLikes} Likes</button>}
        </Link>
        <br />
        <Link to={`/flats/${_id}/edit`}>Edit this Flat</Link>
        <br />
        <button onClick={() => this.deleteClick()}>Delete this flat</button>
        <br />
        <Link to="/my-flats">Back to my list</Link> */}
      </section>
    );
  }
}

export default FlatDetails;
