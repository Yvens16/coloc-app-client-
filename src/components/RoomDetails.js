import React from "react";
import api from "../api.js";
import { Link, Redirect } from "react-router-dom";
import {
  Card,
  Carousel,
  CarouselInner,
  CarouselItem,
  View,
  Mask,
  CardBody,
  CardText,
  CardTitle,
  Container,
  CarouselCaption,
  Button,
  CardImage
} from "mdbreact";

class RoomDetails extends React.Component {
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
      owner: "",
      description: "",
      picture: [],
      hasLike: false
    };
  }
  componentDidMount() {
    const { params } = this.props.match;
    console.log("[PARAMS]", params);
    api
      .get(`/room-details/${params.roomId}`)
      .then(response => {
        this.setState(response.data);
        console.log("THE RESPONSE", response.data);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Error with room details");
      });
  }

  likeHandler(owner) {
    console.log("owner._id", owner._id);
    api
      .post(`/likes/${owner._id}`)
      .then(response => {
        console.log("[WHAT I NEED ]", response.data);
        this.setState({ hasLike: true });
      })
      .catch(err => {
        console.log("err", err);
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
      owner,
      hasLike
    } = this.state;

    if (hasLike) {
      return <Redirect to="/room-list" />;
    }
    return (
      <div className="helo">
      <h1>Room Details</h1>
        <Card reverse className="details">
          <Container>
            <h2 className="mt-5 mb-2">This is {owner.firstName} s place </h2>
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
          <Button onClick={() => this.likeHandler(owner)}> LIKE </Button>
          </Container>
          <CardBody cascade>
            <CardTitle>
              A {roomNum} room {housing} of {area} m²
            </CardTitle>
            <CardText>{description}</CardText>
            <CardText>Address : {address}</CardText>
            <CardText>{roomMate} other roommates</CardText>
          </CardBody>
        </Card>
       

        {/*OWNER PROFILE*/}
        <section>
        <Card>
        <h3>Owner Profile</h3>
          <CardImage className="img-fluid" src={owner.avatar} waves />
          <CardBody>
              <CardTitle>{owner.lastName} {owner.firstName} | {owner.age} years old</CardTitle>
              <CardText>{owner.presentation}</CardText>
              <b>{owner.phone} | {owner.email}</b>
          </CardBody>
          <Link to="/room-list"> Return </Link>
      </Card> 
        </section>
      </div>
    );
  }
}

export default RoomDetails;

// api.get(`/owner/${params.owner}`)
// .then(response =>{
//   console.log('[response]', response.data);
// })
// .catch(err =>{
//   console.log('err', err);
// })
