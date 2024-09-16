import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { firebaseConfig, user, sair } from 'https://circle-atlas.github.io/atlas-WEB/js/config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Pega os dados do aluno clicado
const dadosMateria = JSON.parse(localStorage.getItem('dadosMateria'));
if (dadosMateria) {
    document.getElementById('nome-materia').innerText = dadosMateria.id;
} else {
    window.location = "menu-trilhas.html";
}

document.getElementById('nav-sair').addEventListener('click', (e) => {
    e.preventDefault();
    sair();
});
if (!document.querySelector('.colecao-container')) {
    try {
        const trilhaContainer = document.querySelector('.trilha');
    
        dadosMateria.nomeColecoes.forEach(colecao => {
            let colecaoContainer = document.createElement('div');
            colecaoContainer.className = 'colecao-container';
            colecaoContainer.draggable = true;
            colecaoContainer.innerText = colecao;
    
            trilhaContainer.append(colecaoContainer);
        });
    
    } catch (error) {
        document.querySelector('.erro').hidden = false;
        Toastify({
            text: "Erro ao carregar as coleções",
            duration: 6000,
            close: true,
            gravity: "top", 
            position: "center",
            stopOnFocus: true,
            style: {
                background: "red",
            },
        }).showToast();
        console.error("Erro: ", error);
    }
}

const trilhaContainer = document.querySelector('.trilha');

document.addEventListener('dragstart', (e) => {
    e.target.classList.add("dragging");
});

document.addEventListener('dragend', (e) => {
    e.target.classList.remove("dragging");
    let colecoes = document.querySelectorAll('.colecao-container');
    let count = 0;
    let lista = [];
    colecoes.forEach(colecao =>{
        try {
            let materia = colecao.innerHTML; 
            lista.push(materia);

            console.log("Documento inserido com sucesso!");
          } catch (e) {
            console.error("Erro ao adicionar documento: ", e);
          }
          count = ++count;
    })
    const docRef = doc(db, 'subjects', dadosMateria.id);
    updateDoc(docRef, {
        collectionNames: lista
    }).then(() => {
        console.log("Documento atualizado com sucesso!");
    }).catch((e) => {
        console.error("Erro ao atualizar o documento: ", e);
    });
});

trilhaContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    const afterElement = getDragAfterElement(trilhaContainer, e.clientY);
    if (afterElement == null) {
        trilhaContainer.appendChild(dragging);
    } else {
        trilhaContainer.insertBefore(dragging, afterElement);
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.colecao-container:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
