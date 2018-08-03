import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = (({logout, currentUser}) => {
  const display = currentUser ? (
    <div>
      <h1>Welcome {currentUser.username}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
    </div>
  );
  return (<div>{display}</div>);
});

export default Greeting;
