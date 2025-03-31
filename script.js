document.querySelectorAll('.carousel').forEach((carousel) => {
    let currentIndex = 0;

    const slides = carousel.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    const indicators = carousel.querySelectorAll('.indicator');

    function showSlide(index) {
        // Ajuste l'index si hors limites
        if (index < 0) {
            currentIndex = totalSlides - 1; // Aller à la dernière image si on est en dessous de 0
        } else if (index >= totalSlides) {
            currentIndex = 0; // Remettre à zéro si on dépasse le total
        } else {
            currentIndex = index; // Sinon, utilise l'index fourni
        }

        // Cache toutes les images
        slides.forEach((slide) => {
            slide.style.opacity = '0';
            slide.classList.remove('active');
        });

        // Affiche l'image active
        slides[currentIndex].style.opacity = '1';
        slides[currentIndex].classList.add('active');

        // Met à jour les indicateurs
        indicators.forEach((indicator, i) => {
            indicator.classList.remove('active');
            if (i === currentIndex) {
                indicator.classList.add('active');
            }
        });
    }

    function changeSlide(direction) {
        const nextIndex = currentIndex + direction; // Calcule le prochain index
        showSlide(nextIndex); // Affiche la diapositive correspondante
    }

    // Événements pour les boutons
    carousel.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    carousel.querySelector('.next').addEventListener('click', () => changeSlide(1));

    // Affiche la première image au chargement
    showSlide(currentIndex);
});

// Tableau des images
const images = ["Img/Coin1.png", "Img/Coin2.png", "Img/Coin3.png", "Img/Coin4.png"];
let index = 0; // Index actuel

function changeImage() {
  index = (index + 1) % images.length; // Passe à l’image suivante en boucle
  document.getElementById("animated-img").src = images[index]; // Change l'image
}

// Change l’image toutes les 200ms (modifiable)
setInterval(changeImage, 200);

