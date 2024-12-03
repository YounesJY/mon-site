window.onload = function () {
    const userName = "John Doe";  
    alert(`Bienvenue, ${userName} !`);


    const emailCheckbox = document.querySelector("#email_updates");
    const smsCheckbox = document.querySelector("#sms_updates");
    const form = document.querySelector("#notification-form");

    emailCheckbox.addEventListener('change', function () {
        if (emailCheckbox.checked) {
            alert("Notification par email activée.");
        } else {
            alert("Notification par email désactivée.");
        }
    });

    smsCheckbox.addEventListener('change', function () {
        if (smsCheckbox.checked) {
            alert("Notification par SMS activée.");
        } else {
            alert("Notification par SMS désactivée.");
        }
    });


};
