import React, { Component } from "react";
import api from "../api";

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
      picture: []
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
      .then(flatDoc => console.log("Flat created", flatDoc))
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
      picture
    } = this.state;

    return (
      <section>
        <h2>Add a Flat</h2>
        <div>
          <form onSubmit={event => this.handleSubmit(event)}>
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
              <img className="avatar-preview" key={index} src={onePic} />
            ))}

            <button>Add flat</button>
          </form>
        </div>
      </section>
    );
  }
}

export default AddFlats;
