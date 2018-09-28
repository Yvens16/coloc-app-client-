import React from 'react';

const OwnerSign = () => { 
  return (
    <div className="OwnerSign" >
      <label>
        Street Number: <input type="number" placeholder="Example: 12"/>
      </label>
      <label>
        Address: <input type="text" placeholder="Exemple: 13 rue de l'Alma..."/>
      </label>
      <label>
     Zip Code: <input type="number" placeholder="Example: 75018"/>
    </label>
    <label>
        Rent: <input type="number" placeholder="675"/>
      </label>
      <label>
      Flat-Mates present:
      <select>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10+</option>
      </select>
      (1 to 10+)
      </label>

      <label >
      Housing: <select>
      <option value="Studio">Studio</option>
      <option value="Appartments">Appartments</option>
      <option value="Duplex">Duplex</option>
      <option value="Loft">Loft</option>
      <option value="House">House</option>
      <option value="Boat">Boat</option>
      </select>
      </label>

      <label>
        Nb of rooms:
        <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10+</option>
        </select>
        (1 to 10+)
      </label>
       
      <label >
      Area: <input type="number" placeholder="Example: 80"/> 
      (m2)
      </label>

      <label>
        Description: <textarea name="" id="" cols="30" rows="10" placeholder="Describe your environnement , how's the appartment? how it is to live with you? etc..."></textarea>
      </label>

      <label>
      Picture: <input type="file"/>
      </label>

      <button>Sign Up</button>
    </div>
  )
}

export default OwnerSign;