import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = ()=>{
    signInWithPopup(auth,provider)
    .then(result =>{
    const loggedInUser = result.user
    console.log(loggedInUser);
    setUser(loggedInUser);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      {
        user && 
        <div>
          <h1>User: {user.displayName}</h1>
        <h2>Email: {user.email}</h2>
        <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
};

export default Login;