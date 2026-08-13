document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const statusText = document.getElementById('formStatus');
  const returnToSiteBtn = document.getElementById('returnToSite');
  const phoneNumber = '628981056300';

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('name')?.value?.trim() || '';
      const email = document.getElementById('email')?.value?.trim() || '';
      const message = document.getElementById('message')?.value?.trim() || '';

      if (!name || !email || !message) {
        if (statusText) {
          statusText.textContent = 'Harap isi semua field sebelum mengirim.';
        }
        return;
      }

      const whatsappText = `Halo Service Center Te-Fa, nama saya ${name}. Email saya ${email}. Pesan: ${message}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappText)}`;

      if (statusText) {
        statusText.textContent = 'Mengalihkan ke WhatsApp...';
      }

      if (returnToSiteBtn) {
        returnToSiteBtn.hidden = false;
      }

      window.open(whatsappUrl, '_blank');
      form.reset();

      if (statusText) {
        setTimeout(() => {
          statusText.textContent = 'Pesan berhasil dipersiapkan di WhatsApp.';
        }, 300);
      }
    });
  }
});
