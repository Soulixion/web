document.addEventListener('DOMContentLoaded', function () {
  function isMobileDevice() {
      return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  }

  function isScreenWidthLessThan1000px() {
      return window.innerWidth < 1000;
  }

  let originalContent = document.body.innerHTML;

  function createWarningMessage() {
      const messageDiv = document.createElement('div');
      messageDiv.id = 'warningMessage';

      messageDiv.style.textAlign = 'center';
      messageDiv.style.padding = '30px';
      messageDiv.style.fontSize = '25px';
      messageDiv.style.color = '#ffffff';
      messageDiv.style.borderRadius = '8px';
      messageDiv.style.width = '100%';
      messageDiv.style.maxWidth = '1000px';
      messageDiv.style.margin = '50px auto';

      messageDiv.innerHTML = `
          <h2 style="font-size: 40px; color: #ffdd57; margin-bottom: 20px; font-weight: bold;">Avertissement</h2>
          <p>Cette page est optimisée pour une résolution standard.</p>
          <p>Veuillez agrandir votre fenêtre ou utiliser un PC pour avoir l'accès intégral au site.</p>
          <div style="margin-top: 40px;">
              <strong>Voici tout de même les liens de téléchargement :</strong>
              <ul style="list-style: none; padding: 0; margin: 15px 0;">
                  <li style="margin-bottom: 10px;">
                      <a href="https://soulixion.itch.io/howtobecomecrazy" target="_blank" style="color: #0000ff; text-decoration: underline;">How to Become Crazy</a>
                  </li>
                  <li style="margin-bottom: 10px;">
                      <a href="https://soulixion.itch.io/warnne" target="_blank" style="color: #0000ff; text-decoration: underline;">Warnne</a>
                  </li>
                  <li style="margin-bottom: 10px;">
                      <a href="https://soulixion.itch.io/onlydot" target="_blank" style="color: #0000ff; text-decoration: underline;">Only Dot</a>
                  </li>
                  <li style="margin-bottom: 10px;">
                      <a href="https://soulixion.itch.io/dodgeinspace" target="_blank" style="color: #0000ff; text-decoration: underline;">Dodge In Space</a>
                  </li>
                  <li style="margin-bottom: 10px;">
                      <a href="https://soulixion.itch.io/lazerscolors" target="_blank" style="color: #0000ff; text-decoration: underline;">Lazers Colors</a>
                  </li>
                  <li style="margin-bottom: 10px;">
                      <a href="https://soulixion.itch.io/mentalmathmaven" target="_blank" style="color: #0000ff; text-decoration: underline;">Mental Math Maven</a>
                  </li>
              </ul>
          </div>
      `;
      return messageDiv;
  }

  function checkDeviceAndScreen() {
      const existingMessage = document.getElementById('warningMessage');
      if (isMobileDevice() || isScreenWidthLessThan1000px()) {
          if (!existingMessage) {
              originalContent = document.body.innerHTML; // Sauvegarde du contenu  
              const messageDiv = createWarningMessage();
              document.body.innerHTML = '';
              document.body.appendChild(messageDiv);
          }
      } else {
          if (existingMessage) {
              existingMessage.remove();
              document.body.innerHTML = originalContent; // Restauration du contenu  
              initializeCarousel(); // Réinitialisation du carrousel après restauration  
          }
      }
  }

  function initializeCarousel() {
      document.querySelectorAll('.carousel').forEach((carousel) => {
          let currentIndex = 0;
          const slides = carousel.querySelectorAll('.carousel-images img');
          const totalSlides = slides.length;
          const indicators = carousel.querySelectorAll('.indicator');

          function showSlide(index) {
              if (index < 0) {
                  currentIndex = totalSlides - 1; 
              } else if (index >= totalSlides) {
                  currentIndex = 0; 
              } else {
                  currentIndex = index; 
              }

              slides.forEach((slide) => {
                  slide.style.opacity = '0';
                  slide.classList.remove('active');
              });

              slides[currentIndex].style.opacity = '1';
              slides[currentIndex].classList.add('active');

              indicators.forEach((indicator, i) => {
                  indicator.classList.remove('active');
                  if (i === currentIndex) {
                      indicator.classList.add('active');
                  }
              });
          }

          function changeSlide(direction) {
              const nextIndex = currentIndex + direction; 
              showSlide(nextIndex); 
          }

          carousel.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
          carousel.querySelector('.next').addEventListener('click', () => changeSlide(1));
          showSlide(currentIndex);
      });
  }

  checkDeviceAndScreen();
  window.addEventListener('resize', checkDeviceAndScreen);
  // Initialisez le carrousel au démarrage  
  initializeCarousel();
});