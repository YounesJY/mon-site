window.onload = function () {
    const form = document.getElementById("contactForm");
    const nomInput = document.getElementById("nom");
    const emailInput = document.getElementById("email_contact");
    const messageInput = document.getElementById("message");
    const resetButton = document.querySelector('button[type="reset"]');

    // Fonction pour afficher un message d'alerte sous le champ
    function showMessage(inputElement, message, isError) {
        const messageElement = document.createElement("span");
        messageElement.textContent = message;
        messageElement.style.color = isError ? "red" : "green";
        messageElement.style.fontSize = "12px";
        messageElement.style.display = "block";
        inputElement.parentElement.appendChild(messageElement);
    }

    // Réinitialiser les messages d'alerte
    function resetMessages() {
        const messages = document.querySelectorAll("form span");
        messages.forEach(msg => msg.remove());
    }

    // Vérification en temps réel pour l'email
    emailInput.oninput = function () {
        resetMessages();
        const emailValue = emailInput.value.trim();
        if (!emailValue.includes("@") || !emailValue.includes(".")) {
            emailInput.style.borderColor = "red";
            showMessage(emailInput, "Veuillez entrer un email valide.", true); // Afficher message d'erreur
        } else {
            emailInput.style.borderColor = "green";
            showMessage(emailInput, "Email valide.", false); // Afficher message de succès
        }
    };

    // Vérification en temps réel pour le message
    messageInput.oninput = function () {
        resetMessages();
        const messageValue = messageInput.value.trim();
        if (messageValue.length < 10) {
            messageInput.style.borderColor = "red";
            showMessage(messageInput, "Le message doit comporter au moins 10 caractères.", true); // Afficher message d'erreur
        } else {
            messageInput.style.borderColor = "green";
            showMessage(messageInput, "Message valide.", false); // Afficher message de succès
        }
    };

    // Fonction de validation lors de l'envoi du formulaire
    form.onsubmit = function (event) {
        event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

        // Réinitialiser les messages d'alerte
        resetMessages();

        let isValid = true;  // Flag pour vérifier si toutes les conditions sont valides

        // Vérification du nom
        const nom = nomInput.value.trim();
        if (nom === "") {
            alert("Le nom est requis.");
            nomInput.focus(); // Focus sur le champ du nom
            isValid = false;
        }

        // Vérification de l'email
        const email = emailInput.value.trim();
        if (email === "") {
            alert("L'email est requis.");
            emailInput.focus(); // Focus sur le champ de l'email
            isValid = false;
        } else {
            // Vérification du format de l'email avec une regex
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(email)) {
                alert("Veuillez entrer un email valide.");
                emailInput.focus(); // Focus sur le champ de l'email
                isValid = false;
            }
        }

        // Vérification du message
        const message = messageInput.value.trim();
        if (message === "") {
            alert("Le message est requis.");
            messageInput.focus(); // Focus sur le champ du message
            isValid = false;
        } else if (message.length < 10) {
            alert("Le message doit comporter au moins 10 caractères.");
            messageInput.focus(); // Focus sur le champ du message
            isValid = false;
        }

        // Si toutes les validations sont passées, envoyer le formulaire
        if (isValid) {
            alert("Le message a été envoyé avec succès.");
            form.submit(); // Envoi du formulaire
        } else {
            alert("Veuillez corriger les erreurs avant d'envoyer le formulaire.");
        }
    };

    // Ajouter une confirmation avant de réinitialiser le formulaire
    resetButton.onclick = function (event) {
        const confirmation = confirm("Êtes-vous sûr de vouloir réinitialiser le formulaire ? Toutes les données seront perdues.");
        if (!confirmation) {
            event.preventDefault();
        }
    };
};
    