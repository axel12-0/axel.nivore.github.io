/*
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const subject = formData.get('subject');
    const body = `Nom : ${formData.get('name')}\nE-mail : ${formData.get('email')}\n\n${formData.get('message')}`;
    window.location.href = `mailto:nivore.axel@ltpdampierre.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});*/

// --- Envoi du formulaire (EmailJS) ---
(function(){
      emailjs.init({
        publicKey: "SWrbPHGq6xGwoq1QZ",
      });
   })();

emailjs.init({ publicKey: "SWrbPHGq6xGwoq1QZ" });

const formulaire = document.getElementById('contactForm');
const statut = document.getElementById('statut');

formulaire.addEventListener('submit', async function (event) {
    event.preventDefault();
    statut.textContent = "Envoi en cours...";

    const parametres = {
        to_email: "axel.nivore@ltpdampierre.fr",
        name: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        await emailjs.send("service_21iqy8m", "template_srocxav", parametres);
        statut.textContent = "✅ Message envoyé !";
        formulaire.reset();
    } catch (erreur) {
        console.log(erreur);
        statut.textContent = "❌ Erreur : " + (erreur.text || "réessaie plus tard.");
    }
});