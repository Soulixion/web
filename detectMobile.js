document.addEventListener('DOMContentLoaded', function () {
  // Fonction pour vérifier si l'utilisateur est sur un appareil mobile
  function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  }

  // Si l'utilisateur est sur un appareil mobile, ajouter un message d'avertissement
  if (isMobileDevice()) {
    const messageDiv = document.createElement('div');
    messageDiv.style.textAlign = 'center';
    messageDiv.style.padding = '20px';
    messageDiv.style.fontSize = '20px';
    messageDiv.style.color = 'white';
    messageDiv.textContent = 'Cette page est optimisée pour un usage sur PC. Merci de vous connecter depuis un ordinateur.';
    
    document.body.innerHTML = '';  // Vider le contenu actuel
    document.body.appendChild(messageDiv); // Ajouter le message
  }
});
