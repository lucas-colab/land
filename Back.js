document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os sliders na página
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach((slider) => {
    const slides = slider.querySelector('.slides');
    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');
    const total = slides.children.length;
    let index = 0;

    // Evento para o botão "Próximo"
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % total;
      slides.style.transform = `translateX(-${index * 100}%)`;
    });

    // Evento para o botão "Anterior"
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + total) % total;
      slides.style.transform = `translateX(-${index * 100}%)`;
    });
  });
});
