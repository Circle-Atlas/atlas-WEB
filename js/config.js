// Configuração do firebase
 export const firebaseConfig = {
    apiKey: "AIzaSyAObRm90Wps9GkcskYq1GgZJBDv3jJAq2s",
    authDomain: "atlas-14386.firebaseapp.com",
    projectId: "atlas-14386",
    storageBucket: "atlas-14386.appspot.com",
    messagingSenderId: "77319468044",
    appId: "1:77319468044:web:e31abcf323b0d85d566a29",
    measurementId: "G-TN95H2W4JK"
  }

// Função de deslogar
export const sair = () => {
    localStorage.removeItem('user');
    window.location = "index.html";
}

// Puxar usuário
export const user = localStorage.getItem('user');
  
