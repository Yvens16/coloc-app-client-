import React from 'react';


const Login = () => {
  return (
    <div className="login">
    <label>
    Email: <input type="email" placeholder="IanSolo@gmail.com"/>
    </label>

    <label>
    Password: <input type="password" placeholder="Keep it secret from the sith "/>
    </label>
    <button>Log In</button>
    </div>
  )
}


export default Login;