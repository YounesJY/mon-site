// script/communaute.js
window.onload = function () {
    // Confirmation avant d'envoyer une question
    const questionForm = document.querySelector('#poser-question form');
    questionForm.onsubmit = function (event) {
        const confirmSend = confirm("Êtes-vous sûr de vouloir envoyer cette question ?");
        if (!confirmSend) {
            event.preventDefault();
        }
    };

    // Confirmation avant de partager un projet
    const projectForm = document.querySelector('#partager-projet form');
    projectForm.onsubmit = function (event) {
        const confirmShare = confirm("Êtes-vous sûr de vouloir partager ce projet ?");
        if (!confirmShare) {
            event.preventDefault();
        }
    };

    // Compteur de caractères pour la zone de question
    const questionTextarea = document.querySelector('#question');
    const charLimit = 200;
    const questionCounter = document.createElement("p");
    questionCounter.textContent = `0/${charLimit} caractères`;
    questionTextarea.parentNode.insertBefore(questionCounter, questionTextarea.nextSibling);

    questionTextarea.oninput = function () {
        const currentLength = questionTextarea.value.length;
        questionCounter.textContent = `${currentLength}/${charLimit} caractères`;
        if (currentLength > charLimit) {
            questionCounter.style.color = "red";
        } else {
            questionCounter.style.color = "black";
        }
    };

    // Compteur de caractères pour la description du projet
    const descriptionTextarea = document.querySelector('#description_projet');
    const descLimit = 300;
    const descriptionCounter = document.createElement("p");
    descriptionCounter.textContent = `0/${descLimit} caractères`;
    descriptionTextarea.parentNode.insertBefore(descriptionCounter, descriptionTextarea.nextSibling);

    descriptionTextarea.oninput = function () {
        const currentLength = descriptionTextarea.value.length;
        descriptionCounter.textContent = `${currentLength}/${descLimit} caractères`;
        if (currentLength > descLimit) {
            descriptionCounter.style.color = "red";
        } else {
            descriptionCounter.style.color = "black";
        }
    };
};
