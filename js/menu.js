const user = localStorage.getItem('user');

if (user) {
const userData = JSON.parse(user); 

console.log(userData); 

document.getElementById('bem-vindo').innerHTML = `Bem-vindo, ${userData.displayName}`;

} else {
window.location = "https://circle-atlas.github.io/atlas-WEB/login.html";
}