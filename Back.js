// Back.js

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
  if (!wifiBtn || !modal) return;

  wifiBtn.addEventListener('click', async e => {
    e.preventDefault();
    const ssid = wifiBtn.dataset.ssid;
    const pwd  = wifiBtn.dataset.password;

    // Copia a senha para a área de transferência
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(pwd);
      } else {
        const tmp = document.createElement('textarea');
        tmp.value = pwd;
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        document.body.removeChild(tmp);
      }
    } catch (err) {
      console.error('Erro ao copiar senha:', err);
    }

    // Exibe o modal flutuante
    showWifiModal(ssid);
  });
});

/**
 * Exibe um modal flutuante no centro da tela com bordas arredondadas
 * e desaparece após 3 segundos.
 */
function showWifiModal(ssid) {
  const modal = document.getElementById('wifi-modal');
  let content = modal.querySelector('.wifi-modal-content');
  if (!content) {
    content = document.createElement('div');
    content.className = 'wifi-modal-content';
    modal.appendChild(content);
  }
  content.innerHTML = `
    <p><strong>Rede:</strong> ${ssid}</p>
    <p>Senha copiada!</p>
  `;

  modal.classList.add('show');

  // Remove a classe após 3 segundos para animar a saída
  setTimeout(() => {
    modal.classList.remove('show');
  }, 3000);
}
