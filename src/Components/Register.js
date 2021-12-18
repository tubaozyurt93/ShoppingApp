
import { React, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import './Form.css';

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    
    const logout = async () => {
      await signOut(auth)
  };

    return(
      <div className='Register'>
        <div>
                <h3>Register</h3>
                <input placeholder="email"  onChange={(event) => { setRegisterEmail(event.target.value); }} />
                <input placeholder="password"  onChange={(event) => { setRegisterPassword(event.target.value); }} />
                <button  onClick={register}>Create User</button>
            </div>
            <div>
                <h4> User Logged In: </h4>
                {user?.email}
                <button onClick={logout}>Sign Out</button>
            </div>
      </div>
             
    )
}

export default Register;
