document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const subject = formData.get('subject');
    const body = `Nom : ${formData.get('name')}\nE-mail : ${formData.get('email')}\n\n${formData.get('message')}`;
    window.location.href = `mailto:nivore.axel@ltpdampierre.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});