// script/index.js
window.onload = function () {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Bonjour et bienvenue sur notre site !";
    } else if (hours < 18) {
        greeting = "Bonne après-midi et bienvenue sur notre site !";
    } else {
        greeting = "Bonsoir et bienvenue sur notre site !";
    }

    alert(greeting);
};
