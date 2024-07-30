document.addEventListener('DOMContentLoaded', () => {
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

    const turmas = document.querySelectorAll('.turmas-btn');

    turmas.forEach(turma => {
        turma.addEventListener('click', () => {

            let turmaId = turma.id;

            console.log(turmaId);

            let containerTurmas = document.querySelector('.container-turmas');

            let turma1 = document.querySelector('.turmas-primeiro');
            let turma2 = document.querySelector('.turmas-segundo');
            let turma3 = document.querySelector('.turmas-terceiro');

    
            containerTurmas.hidden = false;

            switch (turmaId) {
                case "1ano" :

                    if(turma1.hidden == false) {
                        turma1.hidden = true;
                    }

                    else {
                        turma1.hidden = false;
                        turma2.hidden = true;
                        turma3.hidden = true;
                    }
                    
                break;

                case "2ano":

                    if(turma2.hidden == false) {
                        turma2.hidden = true;
                    }

                    else {
                        turma1.hidden = true;
                        turma2.hidden = false;
                        turma3.hidden = true;
                    }
                    
                break;

                case "3ano":

                if(turma3.hidden == false) {
                    turma3.hidden = true;
                }

                else {
                    turma1.hidden = true;
                    turma2.hidden = true;
                    turma3.hidden = false;
                }
                    
                break;
            }

            
        })
    })
})

