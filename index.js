// FADE
const fadeEL = document.querySelector('.fade');

window.onscroll = function() {
    if(pageYOffset > 150) {
        fadeEL.style.opacity = "0.5";
    }
}


// ANIMATE ON CARD SCROLL
const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
})

cards.forEach( card => {
    observer.observe(card)
})