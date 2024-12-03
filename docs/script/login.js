window.onload = function () {
    const emailInput = document.getElementById("email-login");
    const passwordInput = document.getElementById("password-login");

    // Fonction pour obtenir la valeur d'un cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Remplir les champs avec les valeurs des cookies
    const savedEmail = getCookie("email");
    const savedPassword = getCookie("password");

    console.log(getCookie("email"))

    if (savedEmail) {
        emailInput.value = decodeURIComponent(savedEmail);  // Remplir le champ email
    }

    if (savedPassword) {
        passwordInput.value = decodeURIComponent(savedPassword);  // Remplir le champ mot de passe
    }

    // Validation instantanée de l'email
    emailInput.oninput = function () {
        if (!emailInput.value.includes("@")) {
            emailInput.style.borderColor = "red";  // Bordure rouge si le @ est absent
        } else {
            emailInput.style.borderColor = "green";  // Bordure verte si le @ est présent
        }
    };

    // Gestion du bouton Effacer tout
    const resetButton = document.querySelector("button[type='reset']");
    resetButton.onclick = function (event) {
        const confirmation = confirm("Êtes-vous sûr de vouloir effacer tous les champs ?");
        if (!confirmation) {
            event.preventDefault(); // Empêche la réinitialisation si l'utilisateur annule
        }
    };
};
