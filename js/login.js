import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { firebaseConfig } from ' https://circle-atlas.github.io/atlas-WEB/js/config.js ';

if (localStorage.getItem('user')) {
  localStorage.setItem('logado', 'ok');
  window.location = "https://circle-atlas.github.io/atlas-WEB/menu-estatisticas.html";
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

document.getElementById('login-btn').addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      if (user.email.includes("icone.g12.br")) {
        Toastify({
          text: "Logado com sucesso",
          duration: 3000,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "green",
          },
          onClick: function(){} // Callback after click
        }).showToast();

        console.log(user);

        localStorage.setItem('user', JSON.stringify(user));

        localStorage.setItem('logado', 'ok');

        window.location = "https://circle-atlas.github.io/atlas-WEB/menu-estatisticas.html";
      } else {
        Toastify({
          text: "Login inválido",
          duration: 3000,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "red",
          },
          onClick: function(){} // Callback after click
        }).showToast();
      }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});