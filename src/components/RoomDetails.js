import React from 'react';
import api from "../api.js";
import { Link, Redirect } from "react-router-dom";


class RoomDetails extends  React.Component{
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
      owner:"",
      description: "",
      picture: [],
      hasLike: false
    }
  }
  componentDidMount () {
    const { params } = this.props.match;
    api
    .get(`/room-details/${params.roomId}`)
    .then(response => {
      this.setState(response.data)
      console.log('response.data', response.data);
    })
    .catch(err => { 
      console.log(err);
      alert("Sorry! Error with room details")
    })
    
    }
    

    likeHandler(owner) {
      console.log('owner._id', owner._id)
      api
      .post(`/likes/${owner._id}`)
      .then(response => {
        console.log("[WHAT I NEED ]", response.data )
        this.setState({hasLike: true})})
      .catch(err => {
        console.log('err', err)
      })

    }

  render () {
   const { _id,
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
      return <Redirect to="/room-list" />
    }
    return (
      <section >
      <h1> Room Details</h1>

      {picture.map((onePic, index)=>{
        <img key={index} src={onePic.picture} />
      })}

      <button onClick={() => this.likeHandler(owner)}> LIKE </button>
      <p> {description} {area} </p>



      <Link to="/room-list"> Return </Link>

      <div className="Owner-profile">
      <h3> Owner Profile</h3>
      {owner.lastName}  {owner.firstName}
      {owner.age} 
      <img src={owner.avatar} />
      {owner.presentation}
      {owner.phone}

      </div>

      </section>
    )
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

