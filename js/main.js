const header = document.querySelector(".header");
if (header) {
    // Animate Header on scroll
    let scrollpos = window.scrollY
    const header_height = header.offsetHeight
    const addClassOnScroll = () => header.classList.add("header-active")
    const remClassOnScroll = () => header.classList.remove("header-active")
    window.addEventListener('scroll', function() {
        scrollpos = window.scrollY;
        if (scrollpos >= 50) { addClassOnScroll() } else { remClassOnScroll() }
    })
}