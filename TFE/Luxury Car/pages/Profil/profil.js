/*Profil*/
const pnom = document.querySelector('.nom');
const pprenom = document.querySelector('.prenom');
const pgenre = document.querySelector('.genre');
const pemail = document.querySelector('.email');
const pmdp = document.querySelector('.mdp');
let nom = findCookie("nom");
let prenom = findCookie("prénom");
let genre = findCookie("genre");
let email = findCookie("email");
let mdp = findCookie("mot de passe");

function findCookie(nomDuCookie) {
    let output;
    document.cookie.split(';').forEach(cookie => {
        let params = cookie.split('=');
        if (params[0].trim() == nomDuCookie) {
            output = params[1].trim();
        }
    });
    return output
}

function afficheProfil() {
    pnom.textContent = `Nom : ${nom}`;
    pprenom.textContent = `Prénom : ${prenom}`;
    pgenre.textContent = `genre : ${genre}`;
    pemail.textContent = `email : ${email}`;
    pmdp.textContent = `mot de passe : ${mdp}`;
}
afficheProfil();