import { React, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import './Form.css';

function LogIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
};

  return (
      <div>
        <h3>Log In</h3>
        <input placeholder="email" onChange={(event) => { setLoginEmail(event.target.value); }} />
        <input placeholder="password" onChange={(event) => { setLoginPassword(event.target.value); }} />
        <button onClick={login}>Log In</button>
      </div>
  )
}

export default LogIn;
