const yearEl = document.getElementById('year');
if (yearEl) {
	yearEl.textContent = new Date().getFullYear();
}

// --- Envoi du formulaire (EmailJS) ---
if (typeof emailjs !== 'undefined') {
	emailjs.init({ publicKey: 'SWrbPHGq6xGwoq1QZ' });
}

const formulaire = document.getElementById('contactForm');
const statut = document.getElementById('statut');

if (formulaire && statut) {
	const submitBtn = formulaire.querySelector('button[type="submit"]');

	formulaire.addEventListener('submit', async (event) => {
		event.preventDefault();

		if (typeof emailjs === 'undefined') {
			statut.className = 'font-mono text-xs tracking-wider text-rose-400';
			statut.textContent = 'Erreur : service EmailJS indisponible.';
			return;
		}

		statut.className = 'font-mono text-xs tracking-wider text-endfield';
		statut.textContent = 'TRANSMISSION EN COURS...';
		if (submitBtn) submitBtn.disabled = true;

		const parametres = {
			to_email: 'axel.nivore@ltpdampierre.fr',
			name: document.getElementById('nom').value.trim(),
			email: document.getElementById('email').value.trim(),
			subject: document.getElementById('subject').value.trim(),
			message: document.getElementById('message').value.trim()
		};

		try {
			await emailjs.send('service_21iqy8m', 'template_srocxav', parametres);
			statut.className = 'font-mono text-xs tracking-wider text-endfield';
			statut.textContent = 'TRANSMISSION RÉUSSIE : message envoyé.';
			formulaire.reset();
		} catch (erreur) {
			console.error(erreur);
			statut.className = 'font-mono text-xs tracking-wider text-rose-400';
			statut.textContent = `ÉCHEC TRANSMISSION : ${erreur.text || 'réessayez plus tard.'}`;
		} finally {
			if (submitBtn) submitBtn.disabled = false;
		}
	});
}
