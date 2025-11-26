document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Отправляем…';

  const data = Object.fromEntries(new FormData(e.target).entries());

  // Заглушка отправки: замените на свой бекенд или сервис форм (например, Formspree)
  await new Promise(r => setTimeout(r, 800));
  console.log('Заявка:', data);

  status.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
  e.target.reset();
});
