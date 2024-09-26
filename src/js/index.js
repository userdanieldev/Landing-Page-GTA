const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide');

function slideProximo() {
    const currentSlide = totalSlides[currentIndex];
    currentSlide.classList.add("sair");

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % totalSlides.length;
        slides.style.transform = `translateX(-${currentIndex * 620}px)`;
        currentSlide.classList.remove("sair");
    }, 500); 
}

function slideAnterior() {
    const currentSlide = totalSlides[currentIndex];
    currentSlide.classList.add("sair");

    setTimeout(() => {
        currentIndex = (currentIndex - 1 + totalSlides.length) % totalSlides.length;
        slides.style.transform = `translateX(-${currentIndex * 620}px)`;
        currentSlide.classList.remove("sair");
    }, 500); 
}