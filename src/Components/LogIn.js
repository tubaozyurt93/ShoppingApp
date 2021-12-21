import { React, useState } from "react";
import { withTranslation } from 'react-i18next';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import './Form.css';

function LogIn({t}) {
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
        <input placeholder={t('register.placeholders.email')}  onChange={(event) => { setLoginEmail(event.target.value); }} />
        <input placeholder={t('register.placeholders.password')}  onChange={(event) => { setLoginPassword(event.target.value); }} />
        <button onClick={login}>{t('navbar.buttons.login')} </button>
      </div>
  )
}

export default withTranslation()(LogIn);
