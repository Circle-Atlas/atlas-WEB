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
        window.location = "https://circle-atlas.github.io/atlas-WEB/index.html";
    }
})