
import { React, useState } from "react";
import { withTranslation } from 'react-i18next';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import './Form.css';

function Register({t}) {
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
                <input placeholder={t('register.placeholders.email')}  onChange={(event) => { setRegisterEmail(event.target.value); }} />
                <input placeholder={t('register.placeholders.password')}  onChange={(event) => { setRegisterPassword(event.target.value); }} />
                <button  onClick={register}>{t('register.buttons.createUser')}</button>
            </div>
            
            <div>
                <h4> {t('register.user')} </h4>
                {user?.email}
                <button onClick={logout}>{t('register.buttons.signOut')}</button>
            </div>
      </div>
             
    )
}

export default withTranslation()(Register);
