let slideIndex = 1;

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Автоматично прокручувати слайди кожні 3 секунди (за необхідності)
setInterval(function () {
    plusSlides(1);
}, 5000);

// Показати перший слайд при завантаженні
showSlides(slideIndex);
