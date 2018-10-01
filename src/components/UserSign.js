import React from 'react';

const UserSign = (props) => {

  const {presentation, budget, updateInput, style} = props;
  return (
    <div className="UserSign" style={{display: style}}>
      <label>
      Introduce yourself: <textarea value={presentation} name="presentation" id="" cols="30" rows="10" placeholder="Be interresting, Be attractive, Be cool, Be who you are 😎"
      onChange={event => updateInput(event)}></textarea>
      </label>
      <label>
      Budget: <input type="number" value={budget} name="budget" placeholder="Example: 700"
      onChange={event => updateInput(event)}/> €
      </label>

      <button>Sign Up</button>
    </div>
  )
}

export default UserSign;