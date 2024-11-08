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
        messageDiv.style.textAlign = 'center';
        messageDiv.style.padding = '20px';
        messageDiv.style.fontSize = '20px';
        messageDiv.style.color = 'white';
        messageDiv.textContent = "Cette page est optimisée pour une résolution standard. Veuillez agrandir votre fenêtre ou utiliser un PC pour une expérience optimale.";

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
