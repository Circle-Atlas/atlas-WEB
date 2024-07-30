const user = localStorage.getItem('user');

if (user) {
const userData = JSON.parse(user); 

console.log(userData); 

let bemVindo = document.getElementById('bem-vindo');

bemVindo.innerHTML = `Bem-vindo, ${userData.displayName}`;

let fotoPerfil =document.getElementById('foto-perfil');

fotoPerfil.src = userData.photoURL;

} else {
window.location = "https://circle-atlas.github.io/atlas-WEB/index.html";
}