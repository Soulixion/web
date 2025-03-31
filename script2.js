const images = ["Img/Coin1.png", "Img/Coin2.png", "Img/Coin3.png", "Img/Coin4.png"];
  let index = 0;
  let direction = 1; // 1 = avancer, -1 = reculer
  
  function changeImage() {
    document.getElementById("animated-img").src = images[index]; // Change l'image
  
    // Met à jour l'index
    index += direction;
  
    // Si on atteint la dernière image, on change de direction
    if (index === images.length - 1 || index === 0) {
      direction *= -1; // Inverse la direction
    }
  }
  
  // Change l’image toutes les 200ms
  setInterval(changeImage, 100);

    // Sélectionne le canvas de la div3
  const canvas = document.querySelector('.matrix-canvas');
  const ctx = canvas.getContext('2d');

  // Ajuste le canvas à la taille de l'image
  function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas(); // Taille initiale

  // Lettres utilisées
  const letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789".split("");

  // Paramètres des colonnes
  const fontSize = 15; // Augmente la taille des lettres
  const columns = Math.floor(canvas.width / (fontSize * 1.5)); // Ajustement pour plus de colonnes
  const drops = Array(columns).fill(0);

  function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // Couleur verte des lettres
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillText(text, i * fontSize * 1.5, drops[i] * fontSize); // Espacement ajusté

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              drops[i] = 0;
          }
          drops[i]++;
      }
  }

setInterval(drawMatrix, 50);
