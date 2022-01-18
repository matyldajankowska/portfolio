const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
})

document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
})
