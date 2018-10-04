import React from "react";
import {Input, Row} from 'react-materialize';

const OwnerSign = props => {
  const {
    style,
    multipleUpload,
    updateInput,
    streetNum,
    address,
    zipCode,
    rent,
    roomMate,
    housing,
    roomNum,
    area,
    description,
    picture
  } = props;

  return (
    <div className="OwnerSign" style={{ display: style }}>
      <label>
        Street Number:{" "}
        <input
          type="number"
          value={streetNum}
          name="streetNum"
          onChange={event => updateInput(event)}
          placeholder="Example: 12"
        />
      </label>
      <label>
        Address:{" "}
        <input
          type="text"
          value={address}
          name="address"
          onChange={event => updateInput(event)}
          placeholder="Exemple: 13 rue de l'Alma..."
        />
      </label>
      <label>
        Zip Code:{" "}
        <input
          type="number"
          value={zipCode}
          name="zipCode"
          onChange={event => updateInput(event)}
          placeholder="Example: 75018"
        />
      </label>
      <label>
        Rent:{" "}
        <input
          type="number"
          value={rent}
          name="rent"
          onChange={event => updateInput(event)}
          placeholder="675"
        />
      </label>
      <label>
        Flat-Mates present:
        <Input s={6} type='select' label="Materialize Select" defaultValue='2'
          value={roomMate}
          name="roomMate"
          onChange={event => updateInput(event)}
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
        </Input>
        (1 to 10+)
      </label>

      <label>
        Housing:{" "}
       <Input s={6} type='select' label="Materialize Select" defaultValue='2'
        value={housing}
          name="housing"
          onChange={event => updateInput(event)}
        >
          <option value="Studio">Studio</option>
          <option value="Appartment">Appartment</option>
          <option value="Duplex">Duplex</option>
          <option value="Loft">Loft</option>
          <option value="House">House</option>
          <option value="Boat">Boat</option>
          </Input>
      </label>

      <label>
        Nb of rooms:
        <Input s={6} type='select' label="Materialize Select" defaultValue='2'
          value={roomNum}
          name="roomNum"
          onChange={event => updateInput(event)}
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
        </Input>
        (1 to 10+)
      </label>

      <label>
        Area:{" "}
        <input
          type="number"
          name="area"
          value={area}
          onChange={event => updateInput(event)}
          placeholder="Example: 80"
        />
        (m2)
      </label>

      <label>
        Description:{" "}
        <textarea
          name="description"
          value={description}
          onChange={event => updateInput(event)}
          cols="30"
          rows="10"
          placeholder="Describe your environnement , how's the appartment? how it is to live with you? etc..."
        />
      </label>

      <label>
        Picture:{" "}
        <input
          type="file"
          onChange={event => multipleUpload(event)}
          multiple
          name="picture"
        />
      </label>
      {
        picture.map((onePic, index) =>
          <img key={index} className="avatar-preview" src={onePic} />
          )
      }

      

      <button>Sign Up</button>
    </div>
  );
};

export default OwnerSign;
