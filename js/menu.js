const user = localStorage.getItem('user');

if (user) {
const userData = JSON.parse(user); 

console.log(userData); 

document.getElementById('bem-vindo').innerHTML = `Bem-vindo, ${userData.displayName}`;

document.getElementById('foto-perfil').src = userData.photoURL;

} else {
window.location = "https://circle-atlas.github.io/atlas-WEB/login.html";
}