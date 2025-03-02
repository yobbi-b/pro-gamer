let menu = document .querySelector('.menu-icon');
let navbar = document .querySelector('.menu');
menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
}

document.querySelectorAll(".image-card").forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
        console.log(`Hovered over image ${index + 1}`);
    });
});



const slider = document.querySelector(".slider");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let scrollAmount = 0;
const slideWidth = 265; // Card width + gap

// Move slider left
prevButton.addEventListener("click", () => {
    scrollAmount -= slideWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

// Move slider right
nextButton.addEventListener("click", () => {
    scrollAmount += slideWidth;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

// Auto Slide every 3 seconds
setInterval(() => {
    scrollAmount += slideWidth;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (scrollAmount > maxScroll) scrollAmount = 0;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
}, 3000);