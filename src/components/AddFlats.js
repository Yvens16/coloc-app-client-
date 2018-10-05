import React, { Component } from "react";
import api from "../api";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Input, Button } from "mdbreact";

class AddFlats extends Component {
  constructor(props) {
    super(props);

    this.originalPicture = "";
    this.state = {
      housing: "Studio",
      streetNum: "",
      address: "",
      zipCode: "",
      rent: "",
      roomMate: "0",
      roomNum: "1",
      area: "",
      description: "",
      picture: [],
      submitSuccess: false
    };
  }

  updateInput(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    api
      .post("/flats", this.state)
      .then(flatDoc => {
        console.log("Flat created", flatDoc);
        this.setState({ submitSuccess: true });
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was a problem.");
      });
  }

  multipleUpload = event => {
    // Intial FormData
    const formData = new FormData();
    //Push all the axios request promise into a single array
    //console.log("[FILE LIST]", event.target.files);

    const uploaders = Array.from(event.target.files).forEach(oneFile => {
      formData.append("oneFile", oneFile);
    });

    console.log("[FORMDATA]", formData);

    api
      .post("/upload-image", formData)
      .then(response => {
        console.log("[FILE UPLOADED]", response.data);
        const dataArray = response.data;
        const picsArray = [];
        dataArray.forEach(one => {
          return picsArray.push(one.imageUrl);
        });
        this.setState({ picture: picsArray });
      })
      .catch(err => {
        console.log(err);
        alert("error");
      });
  };

  render() {
    const {
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
      submitSuccess
    } = this.state;
    console.log("submitsucces? ", submitSuccess);

    if (submitSuccess) {
      return <Redirect to="/my-flats" />;
    }

    return (
      <section>
        {/* <!-- Extended material form grid --> */}
        {/* </div> */}
        <h2>Add a flat</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          {/* <!-- Grid row --> */}
          <div class="form-row">
            {/* <!-- Grid column --> */}
            <div class="col-md-6">
              {/* <!-- Material input --> */}
              <div class="md-form form-group">
                <input
                  type="number"
                  class="form-control"
                  id="inputEmail4MD"
                  value={streetNum}
                  name="streetNum"
                  onChange={event => this.updateInput(event)}
                  placeholder="40"
                />
                <label for="inputEmail4MD">Street Number</label>
              </div>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-6">
              {/* <!-- Material input --> */}
              <div class="md-form form-group">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword4MD"
                  value={zipCode}
                  name="zipCode"
                  onChange={event => this.updateInput(event)}
                  placeholder="75008"
                />
                <label for="inputPassword4MD">Zip Code</label>
              </div>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}

          {/* <!-- Grid row --> */}
          <div class="row">
            {/* <!-- Grid column --> */}
            <div class="col-md-12">
              {/* <!-- Material input --> */}
              <div class="md-form form-group">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddressMD"
                  value={address}
                  name="address"
                  onChange={event => this.updateInput(event)}
                  placeholder="rue du Colisée"
                />
                <label for="inputAddressMD">Address</label>
              </div>
            </div>

            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}

          {/* <!-- Gri/d row --> */}
          <div class="form-row">
            {/* <!-- Grid column --> */}
            <div class="col-md-6">
              {/* <!-- Material input --> */}
              <div class="md-form form-group">
                <input
                  type="number"
                  class="form-control"
                  id="inputCityMD"
                  name="area"
                  value={area}
                  onChange={event => this.updateInput(event)}
                  placeholder="90"
                />
                <label for="inputCityMD">Area (m²)</label>
              </div>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-6">
              {/* <!-- Material input --> */}
              <div class="md-form form-group">
                <input
                  type="number"
                  class="form-control"
                  id="inputZipMD"
                  value={rent}
                  name="rent"
                  onChange={event => this.updateInput(event)}
                  placeholder="600"
                />
                <label for="inputZipMD">Rent (€)</label>
              </div>
            </div>
            {/* <!-- Grid column --> */}
          </div>

          <div class="form-row">
            <div class="col-md-4">
              <label>Roommates present:</label>
              <select
                class="browser-default"
                value={roomMate}
                name="roomMate"
                onChange={event => this.updateInput(event)}
              >
                <option disabled selected>
                  Choose your option
                </option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10+</option>
              </select>
            </div>

            <div class="col-md-4">
              <label>Number of room:</label>
              <select
                class="browser-default"
                value={roomNum}
                name="roomNum"
                onChange={event => this.updateInput(event)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10+</option>
              </select>
            </div>

            <div class="col-md-4">
              <label>Housing:</label>
              <select
                class="browser-default"
                value={housing}
                name="housing"
                onChange={event => this.updateInput(event)}
              >
                <option value="Studio">Studio</option>
                <option value="Appartment">Appartment</option>
                <option value="Duplex">Duplex</option>
                <option value="Loft">Loft</option>
                <option value="House">House</option>
                <option value="Boat">Boat</option>
              </select>
            </div>
          </div>

          {/* <!--Textarea with icon prefix--> */}
          <div class="md-form amber-textarea active-amber-textarea-2">
            <i class="fa fa-pencil prefix" />
            <textarea
              type="text"
              id="form24"
              class="md-textarea form-control"
              rows="3"
              name="description"
              value={description}
              onChange={event => this.updateInput(event)}
            />
            <label for="form24">
              Describe your environnement, how's the appartment? how it is to
              live with you? etc...
            </label>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupFileAddon01">
                Picture(s)
              </span>
            </div>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
                onChange={event => this.multipleUpload(event)}
                multiple
                name="picture"
                aria-describedby="inputGroupFileAddon01"
              />
              <label class="custom-file-label" for="inputGroupFile01">
                Choose file
              </label>
            </div>
          </div>

          {/* <!-- Card group --></div> */}
          <div class="card-group">
            {/* <!-- Card --> */}
            {picture.map((onePic, index) => {
              return (
                <div key={index} class="card mb-4">
                  {/* <!-- Card image --> */}
                  <div class="view overlay">
                    <img
                      class="card-img-top"
                      src={onePic}
                      alt="Card image cap"
                    />
                    <a href="#!">
                      <div class="mask rgba-white-slight" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <!-- Card group --> */}
          {/* <!-- Grid row --> */}
          <button type="submit" class="btn btn-primary btn-md">
            Add this flat
          </button>
        </form>
        {/* <!-- Extended material form grid --> */}

        {/* 6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666 */}
        {/* <h2>Add a Flat</h2>
        <div>
          <form onSubmit={event => this.handleSubmit(event)}> */}
        {/* <label>
              Street Number:{" "}
              <input
                type="number"
                value={streetNum}
                name="streetNum"
                onChange={event => this.updateInput(event)}
                placeholder="Example: 12"
              />
            </label> */}
        {/* <label>
              Address:{" "}
              <input
                type="text"
                value={address}
                name="address"
                onChange={event => this.updateInput(event)}
                placeholder="Exemple: 13 rue de l'Alma..."
              />
            </label> */}
        {/* <label>
              Zip Code:{" "}
              <input
                type="number"
                value={zipCode}
                name="zipCode"
                onChange={event => this.updateInput(event)}
                placeholder="Example: 75018"
              />
            </label> */}
        {/* <label>
              Rent:{" "}
              <input
                type="number"
                value={rent}
                name="rent"
                onChange={event => this.updateInput(event)}
                placeholder="675"
              />
            </label> */}
        {/* <label>
              Room mates present:
              <select
                value={roomMate}
                name="roomMate"
                onChange={event => this.updateInput(event)}
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10+</option>
              </select>
              (1 to 10+)
            </label> */}

        {/* <label>
              Housing:{" "}
              <select
                value={housing}
                name="housing"
                onChange={event => this.updateInput(event)}
              >
                <option value="Studio">Studio</option>
                <option value="Appartment">Appartment</option>
                <option value="Duplex">Duplex</option>
                <option value="Loft">Loft</option>
                <option value="House">House</option>
                <option value="Boat">Boat</option>
              </select>
            </label> */}

        {/* <label>
              Nb of rooms:
              <select
                value={roomNum}
                name="roomNum"
                onChange={event => this.updateInput(event)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10+</option>
              </select>
              (1 to 10+)
            </label> */}

        {/* <label>
              Area:{" "}
              <input
                type="number"
                name="area"
                value={area}
                onChange={event => this.updateInput(event)}
                placeholder="Example: 80"
              />
              (m2)
            </label> */}

        {/* <label>
              Description:{" "}
              <textarea
                name="description"
                value={description}
                onChange={event => this.updateInput(event)}
                cols="30"
                rows="10"
                placeholder="Describe your environnement , how's the appartment? how it is to live with you? etc..."
              />
            </label> */}

        {/* <label>
              Picture:{" "}
              <input
                type="file"
                onChange={event => this.multipleUpload(event)}
                multiple
                name="picture"
              />
            </label>
            {picture.map((onePic, index) => (
              <img className="avatar-preview" key={index} src={onePic} />
            ))} */}

        {/* <button>Add flat</button>
          </form>
        </div> */}
      </section>
    );
  }
}

export default AddFlats;
