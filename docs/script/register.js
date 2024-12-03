window.onload = function () {
    const emailInput = document.getElementById("email-register");
    const passwordInput = document.getElementById("password-register");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const form = document.querySelector("form");
    const resetButton = document.querySelector('button[type="reset"]');

    emailInput.oninput = function () {
        if (!emailInput.value.includes("@")) {
            emailInput.style.borderColor = "red";  // Bordure rouge si le @ est absent
        } else {
            emailInput.style.borderColor = "green";  // Bordure verte si le @ est présent
        }
    };

    confirmPasswordInput.oninput = function () {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.style.borderColor = "red";  // Bordure rouge si les mots de passe ne correspondent pas
        } else {
            confirmPasswordInput.style.borderColor = "green";  // Bordure verte si les mots de passe correspondent
        }
    };

    form.onsubmit = function (event) {
        if (passwordInput.value !== confirmPasswordInput.value) {
            event.preventDefault();  // Empêche l'envoi du formulaire
            alert("Les mots de passe ne correspondent pas. Veuillez vérifier.");
        }
    };

    resetButton.onclick = function (event) {
        const confirmation = confirm("Êtes-vous sûr de vouloir réinitialiser le formulaire ? Toutes les données seront perdues.");
        if (!confirmation) {
            event.preventDefault();
        }
    };
};

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

const form = document.querySelector("form");
form.onsubmit = function (event) {
    event.preventDefault(); 

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email-register").value.trim();
    const password = document.getElementById("password-register").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    setCookie("nom", nom, 7);
    setCookie("prenom", prenom, 7);
    setCookie("email", email, 7);
    

    form.reset();
};
