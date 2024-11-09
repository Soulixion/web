document.addEventListener('DOMContentLoaded', function () {
  // Fonction pour vérifier si l'utilisateur est sur un appareil mobile
  function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  }

  // Fonction pour vérifier si la largeur de l'écran est inférieure à 1000px
  function isScreenWidthLessThan1000px() {
    return window.innerWidth < 1000;
  }

  // Sauvegarder le contenu original de la page
  let originalContent = document.body.innerHTML;

  // Fonction pour afficher ou cacher le message d'avertissement
  function checkDeviceAndScreen() {
    // Si l'utilisateur est sur un appareil mobile ou que la largeur de l'écran est inférieure à 1000px
    if (isMobileDevice() || isScreenWidthLessThan1000px()) {
      // Si le message d'avertissement n'existe pas déjà
      if (!document.getElementById('warningMessage')) {
        // Sauvegarder l'état actuel de la page pour rétablir plus tard
        originalContent = document.body.innerHTML;

        // Créer le message d'avertissement
const messageDiv = document.createElement('div');
messageDiv.id = 'warningMessage'; // Assigner un ID pour pouvoir le manipuler plus tard

// Appliquer un style au conteneur du message
messageDiv.style.textAlign = 'center';
messageDiv.style.padding = '30px';
messageDiv.style.paddingTop = '0px';
messageDiv.style.fontSize = '25px';
messageDiv.style.color = '#ffffff';
messageDiv.style.borderRadius = '8px';
messageDiv.style.width = '100%';
messageDiv.style.maxWidth = '1000px';
messageDiv.style.margin = '50px auto'; // Centrer et espacer depuis le haut

// Contenu HTML avec liens stylés
messageDiv.innerHTML = `
  <h2 style="font-size: 40px; color: #ffdd57; margin-bottom: 20px; font-weight: bold;">Avertissement</h2>
  <p>Cette page est optimisée pour une résolution standard.</p>
  <p>Veuillez agrandir votre fenêtre ou utiliser un PC pour avoir l'accès intégral au site.</p>
  <div style="margin-top: 40px;">
    <strong>Voici tout de même les liens de téléchargement :</strong>
    <ul style="list-style: none; padding: 0; margin: 15px 0;">
  <li style="margin-bottom: 10px;">
    <a href="https://github.com/Soulixion/DodgeInSpace" target="_blank" style="color: #0000ff; text-decoration: underline;">How to Become Crazy</a>
  </li>
  <li style="margin-bottom: 10px;">
    <a href="https://github.com/Soulixion/DodgeInSpace" target="_blank" style="color: #0000ff; text-decoration: underline;">Warnne</a>
  </li>
  <li style="margin-bottom: 10px;">
    <a href="https://mega.nz/file/Mo5jCQDT#3SsHjhcL6s-Hx49pbnJPzDMbu4EBVfNbOWlj1ymzEu8" target="_blank" style="color: #0000ff; text-decoration: underline;">Only Dot</a>
  </li>
  <li style="margin-bottom: 10px;">
    <a href="https://mega.nz/file/k54ywCSa#izBNQCfBnfgHtKk2nfTqyVHbewDKsXJWuF7xIYgkStc" target="_blank" style="color: #0000ff; text-decoration: underline;">Dodge In Space</a>
  </li>
  <li style="margin-bottom: 10px;">
    <a href="https://mega.nz/file/phQDATJK#aut_3NleZZBnqhb8bsZH10hvi4dv4Vv3YL5bzUmOF4w" target="_blank" style="color: #0000ff; text-decoration: underline;">Lazers Colors</a>
  </li>
  <li style="margin-bottom: 10px;">
    <a href="https://mega.nz/file/Z04ynTyK#Dxz6LEKMguYJfI0x344hSlir4wRWdqtwc5MTo_EYnbg" target="_blank" style="color: #0000ff; text-decoration: underline;">Mental Math Maven</a>
  </li>
</ul>
  </div>
`;

        // Vider le contenu actuel et afficher le message
        document.body.innerHTML = '';
        document.body.appendChild(messageDiv); // Ajouter le message
      }
    } else {
      // Lorsque la largeur de l'écran est supérieure à 1000px et qu'il y a un message d'avertissement, rétablir la page
      const existingMessage = document.getElementById('warningMessage');
      if (existingMessage) {
        existingMessage.remove(); // Retirer le message si la condition n'est plus remplie
      }

      // Restaurer le contenu original de la page
      if (originalContent) {
        document.body.innerHTML = originalContent; // Restaurer le contenu
      }
    }
  }

  // Vérifier au démarrage de la page
  checkDeviceAndScreen();

  // Ajouter un écouteur pour le redimensionnement de la fenêtre
  window.addEventListener('resize', checkDeviceAndScreen);
});
