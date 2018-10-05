import React, { Component } from "react";
import api from "../api";
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col, Input, Button } from "mdbreact";

class FlatEdit extends Component {
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
      isSubmitSuccess: false
    };
  }

  // called automatically by React when the COMPONENT LOADS
  componentDidMount() {
    const { params } = this.props.match;
    // make the request to the API as soon as the component loads
    api
      .get(`/flats/${params.flatId}`)
      .then(response => {
        console.log("Flat EDIT ", response.data);
        // when we get the data back setState() to update
        this.setState(response.data);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry, error with edit form");
      });
  }

  updateInput(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { params } = this.props.match;

    // PUT and POST requests receive a 2nd argument: the data to submit
    // (here we are submitting the state we've gathered in the form)
    api
      .put(`/flats/${params.flatId}`, this.state)
      .then(response => {
        console.log("Flat PUT ", response.data);
        this.setState({ isSubmitSuccess: true });
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong with edit form");
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
        dataArray.forEach(oneImage => {
          return picsArray.push(oneImage.imageUrl);
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
      isSubmitSuccess,
      owner
    } = this.state;
    console.log("OWNER:  ", owner);
    // Redirect when submit is success
    if (isSubmitSuccess) {
      // redirect back to the phone details page if the submission worked!
      const { params } = this.props.match;
      return <Redirect to={`/flats/${params.flatId}`} />;
    }

    return (
      <section>
        <div>
          <h3>Edit my flat</h3>

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

            <button type="submit" className="btn btn-primary btn-md">
              Save changes
            </button>
          </form>
          <Link to={`/flats/${_id}`}>
            <Button>Cancel</Button>
          </Link>
          {/* --------------------------------------------------------------- */}
          {/* <form onSubmit={event => this.handleSubmit(event)}>
            <label>
              Street Number:{" "}
              <input
                type="number"
                value={streetNum}
                name="streetNum"
                onChange={event => this.updateInput(event)}
                placeholder="Example: 12"
              />
            </label>
            <label>
              Address:{" "}
              <input
                type="text"
                value={address}
                name="address"
                onChange={event => this.updateInput(event)}
                placeholder="Exemple: 13 rue de l'Alma..."
              />
            </label>
            <label>
              Zip Code:{" "}
              <input
                type="number"
                value={zipCode}
                name="zipCode"
                onChange={event => this.updateInput(event)}
                placeholder="Example: 75018"
              />
            </label>
            <label>
              Rent:{" "}
              <input
                type="number"
                value={rent}
                name="rent"
                onChange={event => this.updateInput(event)}
                placeholder="675"
              />
            </label>
            <label>
              Flat-Mates present:
              <select
                value={roomMate}
                name="roomMate"
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
            </label>

            <label>
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
            </label>

            <label>
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
            </label>

            <label>
              Area:{" "}
              <input
                type="number"
                name="area"
                value={area}
                onChange={event => this.updateInput(event)}
                placeholder="Example: 80"
              />
              (m2)
            </label>

            <label>
              Description:{" "}
              <textarea
                name="description"
                value={description}
                onChange={event => this.updateInput(event)}
                cols="30"
                rows="10"
                placeholder="Describe your environnement , how's the appartment? how it is to live with you? etc..."
              />
            </label>

            <label>
              Picture:{" "}
              <input
                type="file"
                onChange={event => this.multipleUpload(event)}
                multiple
                name="picture"
              />
            </label>
            {picture.map((onePic, index) => (
              <img key={index} className="avatar-preview" src={onePic} />
            ))}

            <button>Saves changes</button>
            <Link to={`/flats/${_id}`}>Cancel</Link>
          </form> */}
        </div>
      </section>
    );
  }
}

export default FlatEdit;
