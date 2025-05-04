document.addEventListener('DOMContentLoaded', () => {
  // ===== Slider =====
  document.querySelectorAll('.slider').forEach(slider => {
    const slides  = slider.querySelector('.slides');
    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');
    const total   = slides.children.length;
    let index = 0;

    if (!nextBtn || !prevBtn) return;

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % total;
      slides.style.transform = `translateX(-${index * 100}%)`;
    });
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + total) % total;
      slides.style.transform = `translateX(-${index * 100}%)`;
    });
  });

  // ===== Wi-Fi Button =====
  const wifiBtn = document.getElementById('wifi-btn');
  const modal   = document.getElementById('wifi-modal');
  const text    = document.getElementById('wifi-text');
  const close   = document.getElementById('wifi-modal-close');

  if (wifiBtn && modal && text && close) {
    wifiBtn.addEventListener('click', async e => {
      e.preventDefault();
      const ssid = wifiBtn.dataset.ssid;
      const pwd  = wifiBtn.dataset.password;
      try {
        await navigator.clipboard.writeText(pwd);
        text.textContent = `SSID: ${ssid}\nSenha copiada para a área de transferência!`;
        modal.style.display = 'flex';
      } catch {
        alert('Não foi possível copiar a senha.');
      }
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});
