import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, getDocs, updateDoc, doc, query, where, orderBy} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { firebaseConfig, user, sair } from ' https://circle-atlas.github.io/atlas-WEB/js/config.js ';

if (!user) {
    sair();
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Pega os dados do aluno clicado
const dadosMateria = JSON.parse(localStorage.getItem('dadosMateria'));
if(dadosMateria) {
    document.getElementById('nome-materia').innerText = dadosMateria.id;
}
else {
    window.location = "menu-trilhas.html";
}
document.getElementById('nav-sair').addEventListener('click', (e) => {
    e.preventDefault();
    sair();
})