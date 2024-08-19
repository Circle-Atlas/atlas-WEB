import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, getDocs, updateDoc, doc, query, where, orderBy} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { firebaseConfig, sair } from ' https://circle-atlas.github.io/atlas-WEB/js/firebase-config.js ';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Pega os dados do aluno clicado
const dadosAluno = JSON.parse(localStorage.getItem('dadosAluno'));
if(dadosAluno) {
    document.getElementById('nome-aluno').innerText = dadosAluno.nome;
    document.getElementById('foto-aluno').src = dadosAluno.foto;
}
else {
    window.location = "menu-estatiticas.html";
}
const sair = (e) => {
    e.preventDefault()
    localStorage.removeItem('user');
    window.location = "index.html";
}