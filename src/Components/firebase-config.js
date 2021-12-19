import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAK64um_04Wa-iNSSmZA4dD5tnfE88BlHE",
    authDomain: "shoppingwell-d23b5.firebaseapp.com",
    databaseURL: "https://shoppingwell-d23b5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shoppingwell-d23b5",
    storageBucket: "shoppingwell-d23b5.appspot.com",
    messagingSenderId: "966922877869",
    appId: "1:966922877869:web:b84f414621e75ed94b7f24",
    measurementId: "G-22M28DMJFF"
  };

  const app= initializeApp(firebaseConfig);

  export const auth= getAuth(app);
