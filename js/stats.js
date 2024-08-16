// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, getDocs, updateDoc, doc, query, where,} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Your web app's Firebase configuration
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
const db = getFirestore(app);

const q = query(collection(db, "users"));

const alunos = await getDocs(q);

alunos.forEach((aluno) => {
    const alunosContainer = document.querySelector(".alunos");

    let cardAluno = document.createElement('div');
    cardAluno.id = "aluno-container";
    let imgCardAluno = document.createElement('img');
    imgCardAluno.id = "foto-perfil-aluno";
    let nomeCardAluno = document.createElement('h3');
    nomeCardAluno.id = "nome-aluno";

    imgCardAluno.src = aluno.data().photoURL;
    nomeCardAluno.innerText = aluno.data().name;

    cardAluno.append(imgCardAluno, nomeCardAluno);
    
    alunosContainer.append(cardAluno);

    console.log(aluno.id, " => ", aluno.data());
});

document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('user');

    if (user) {
        const userData = JSON.parse(user); 

        console.log(userData); 

        let bemVindo = document.getElementById('bem-vindo');

        bemVindo.innerHTML = `Bem-vindo, ${userData.displayName}!`;

        if (localStorage.getItem('logado')) {
            Toastify({
                text: "Logado como " + userData.email,
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

            localStorage.removeItem('logado');
        }

        
    } else {
        window.location = "https://circle-atlas.github.io/atlas-WEB/index.html";
    }
})