/*formulaire d'inscirption*/
const form = document.querySelector("form");
const inom = document.getElementById('nom');
const iprenom = document.getElementById('prenom');
const igenre = document.querySelector('select');
const iemail = document.getElementById('email');
const imdp = document.getElementById('mot-de-passe');
const icmdp = document.getElementById('confirmer-mot-de-passe');

let nom = "";
let prenom = "";
let genre = "";
let email = "";
let mdp = "";
let cmdp = "";
function verifForm() {
    inom.addEventListener('input', () => {
        nom = inom.value;
    })
    iprenom.addEventListener('input', () => {
        prenom = iprenom.value;
    })
    igenre.addEventListener('input', () => {
        genre = igenre.value;
    })
    iemail.addEventListener('input', () => {
        email = iemail.value;
    })
    imdp.addEventListener('input', () => {
        mdp = imdp.value;
    })
    icmdp.addEventListener('input', () => {
        cmdp = icmdp.value;
    })
    form.addEventListener('submit', () => {
        if (mdp != cmdp || mdp == "" || cmdp == "") {
            alert("Les deux mots de passes ne sont pas identiques")
        }
        else if (cgv.checked) {
            document.cookie = `${"nom"}=${nom};path=/;`;
            document.cookie = `${"prénom"}=${prenom};path=/;`;
            document.cookie = `${"genre"}=${genre};path=/;`;
            document.cookie = `${"email"}=${email};path=/;`;
            document.cookie = `${"mot de passe"}=${mdp};path=/;`;
            form.setAttribute('action', "../index.html")
        }
        else {
            alert("Veuillez accepter les CGV")
        }
    })
}
verifForm();