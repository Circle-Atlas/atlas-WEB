
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { GoogleAuthProvider, getAuth, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAObRm90Wps9GkcskYq1GgZJBDv3jJAq2s",
    authDomain: "atlas-14386.firebaseapp.com",
    projectId: "atlas-14386",
    storageBucket: "atlas-14386.appspot.com",
    messagingSenderId: "77319468044",
    appId: "1:77319468044:web:e31abcf323b0d85d566a29",
    measurementId: "G-TN95H2W4JK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

document.getElementById('login-btn').addEventListener('click', ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      if (user.email.includes("icone.g12.br")) {
        console.log(user)
      }
      else {
        alert("Login inválido")
      }

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
})