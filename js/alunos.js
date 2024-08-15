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
    let imgCardAluno = document.createElement('img');
    let nomeCardAluno = document.createElement('h3');

    imgCardAluno.src = aluno.photoURL;
    nomeCardAluno.innerText = aluno.displayName;
    
    alunosContainer.append(cardAluno, imgCardAluno, nomeCardAluno)
    
  
  console.log(aluno.id, " => ", aluno.data());
});
