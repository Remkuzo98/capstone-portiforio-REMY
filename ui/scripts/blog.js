const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const menu = document.querySelectorAll ('.menu li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    

}

navSlide();