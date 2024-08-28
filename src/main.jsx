import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyCK1TPmGVXOPYk3yDBc8FN_aJRZtjklVWE",
  authDomain: "ecommerce-8f8f3.firebaseapp.com",
  projectId: "ecommerce-8f8f3",
  storageBucket: "ecommerce-8f8f3.appspot.com",
  messagingSenderId: "790818859497",
  appId: "1:790818859497:web:85df7ef8da6bd96198c378",
  measurementId: "G-957XPRCFWX"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
