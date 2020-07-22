import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';



  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBuJPUHKMSzsKjKtIrKlLo_XHytXHX6G80",
    authDomain: "cart-832b1.firebaseapp.com",
    databaseURL: "https://cart-832b1.firebaseio.com",
    projectId: "cart-832b1",
    storageBucket: "cart-832b1.appspot.com",
    messagingSenderId: "419192461458",
    appId: "1:419192461458:web:3539184532dff40f76ee4b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  // <React.StrictMode>
    <App />,
  //  </React.StrictMode>,
  document.getElementById('root')
);

