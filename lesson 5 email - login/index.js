import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

import { FIREBASE_CONFIG, AUTH_URL} from './src/api/api-config';
import './style.scss';



const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth();

let password = document.getElementById("pass");
let email = document.getElementById("email");

document.querySelector(".auth").addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("object :>> ", userCredential);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

// setTimeout();

// fetch(
//     AUTH_URL,
//     {
//         method: 'POST',
//         headers: {
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify ( {
//             email: 'test4@mail.com',
//             password: 'adaghhrfghr'
//         })
//     }
//     ).then(Response => console.log(Response));

// signInWithEmailAndPassword(auth, 'test@mail.com', '123456')
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
