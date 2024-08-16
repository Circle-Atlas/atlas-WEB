import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, getDocs, updateDoc, doc, query, where, orderBy} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { firebaseConfig } from '/js/firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if(localStorage.getItem('alunoId')) {
    document.getElementById('nome-aluno').innerText = localStorage.getItem('alunoNome');
    document.getElementById('foto-aluno').src = localStorage.getItem('alunoFoto');
}
else {
    window.location = "menu-estatiticas.html";
}