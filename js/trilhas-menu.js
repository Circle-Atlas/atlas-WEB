// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, getDocs, updateDoc, doc, query, where, orderBy} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { firebaseConfig, user, sair } from ' https://circle-atlas.github.io/atlas-WEB/js/config.js ';

if (!user) {
    sair();
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

try {
    // Faz a query no BD
    const q = query(collection(db, "subjects"));
    const materias = await getDocs(q);

    // Para cada materia ele cria um container
    materias.forEach(materia => {
        const materiaContainer = document.createElement('div');
        materiaContainer.className = "materia-container";

        const nomeMateria = document.createElement('p');
        nomeMateria.id = "nome-materia";
        nomeMateria.textContent = materia.data().ID;

        const divMaterias = document.querySelector('.materias');

        materiaContainer.append(nomeMateria);

        divMaterias.append(materiaContainer);

        console.log(materia.data());

        materiaContainer.addEventListener('click', () => {
            
            // Armazena os dados da matéria em um array
            const dadosMateria = {
                id: materia.data().ID,
            }
            // Transforma o array num json
            localStorage.setItem('dadosMateria', JSON.stringify(dadosMateria));

            console.log(JSON.parse(localStorage.getItem('dadosMateria')));

            window.location = "trilhas.html";

        })
    });

} catch (error) {
    document.querySelector('.erro').hidden = false;
    Toastify({
        text: "Erro ao carregar as disciplinas",
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
const sair = (e) => {
    e.preventDefault()
    localStorage.removeItem('user');
    window.location = "index.html";
}
document.getElementById('nav-sair').addEventListener('click', (e) => {
    e.preventDefault();
    sair();
})