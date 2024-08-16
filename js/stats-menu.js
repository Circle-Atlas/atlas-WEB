// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, getDocs, updateDoc, doc, query, where, orderBy} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { firebaseConfig } from '/js/firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

try {
    const q = query(collection(db, "users"));
    const alunos = await getDocs(q);

    // Contador para limitar alunos mostrados
    let count = 0;

    alunos.forEach((aluno) => {
        // Interrompe o loop após 18 alunos
        if (count >= 18) return; 

        const alunosContainer = document.querySelector(".alunos");
    
        let cardAluno = document.createElement('div');
        cardAluno.className = "aluno-container";
        cardAluno.id = aluno.id;
        let imgCardAluno = document.createElement('img');
        imgCardAluno.id = "foto-perfil-aluno";
        let nomeCardAluno = document.createElement('h3');
        nomeCardAluno.id = "nome-aluno";
    
        let imgSrc = aluno.data().photoURL;

        // Verifica se o aluno tem foto, se não tiver, coloca a uma foto padrão
        if (!imgSrc || imgSrc === "undefined" || imgSrc === "") {
            imgCardAluno.src = './assets/img/no-pic-user.jpg';
        } else {
            imgCardAluno.src = imgSrc;
        }

        nomeCardAluno.innerText = aluno.data().name;

        cardAluno.append(imgCardAluno, nomeCardAluno);
    
        alunosContainer.append(cardAluno);
    
        console.log(aluno.id, " => ", aluno.data());
    
        count++;

        // Adiciona o evento de click no card do aluno e cria uma variavel local com o id do aluno
        cardAluno.addEventListener('click', () => {
            localStorage.setItem('alunoId', aluno.id);
            localStorage.setItem('alunoNome', aluno.data().name);
            localStorage.setItem('alunoFoto', imgCardAluno.src);

            console.log(localStorage.getItem('alunoId'));

            window.location = "estatisticas.html";

        })
    });
} catch (error) {
    document.querySelector('.erro').hidden = false;
    Toastify({
        text: "Erro ao carregar os alunos",
        duration: 6000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "red",
        },
        onClick: function(){} // Callback after click
    }).showToast();
    console.error("Erro: ", error);
}

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
        window.location = "index.html";
    }
})