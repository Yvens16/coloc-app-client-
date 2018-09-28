import React from 'react';

const UserSign = () => {
  return (
    <div className="UserSign">
      <label>
      Introduce yourself: <textarea name="" id="" cols="30" rows="10" placeholder="Be interresting, Be attractive, Be cool, Be who you are 😎"></textarea>
      </label>
      <label>
      Budget: <input type="number" placeholder="Example: 700"/> €
      </label>

      <button>Sign Up</button>
    </div>
  )
}

export default UserSign;