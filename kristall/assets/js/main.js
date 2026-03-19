// Бургер меню
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu-header');
    const burgerImg = burger.querySelector('img');

    const menuIconSrc = 'assets/img/Frame 1948754349.svg';
    const closeIconSrc = 'assets/img/Frame 1948754349.svg'; 

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
            burgerImg.src = closeIconSrc; 
            burgerImg.alt = 'Close Menu';
        } else {
            burgerImg.src = menuIconSrc; 
            burgerImg.alt = 'Open Menu';
        }
    });

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnBurger = burger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnBurger && menu.classList.contains('active')) {
            menu.classList.remove('active');
            burgerImg.src = menuIconSrc; 
            burgerImg.alt = 'Open Menu';
        }
    });
});


// popap
document.addEventListener('DOMContentLoaded', function() {
    
    const popap = document.querySelector('.popap');
    const popapBtns = document.querySelectorAll('.popap-btn');
    const overlay = document.querySelector('.popap__overlay'); 
    function openPopap() {
        popap.classList.add('active');

        document.body.style.overflow = 'hidden';
    }

    function closePopap() {
        popap.classList.remove('active');
        document.body.style.overflow = '';
    }

    popapBtns.forEach(btn => {
        btn.addEventListener('click', openPopap);
    });
    overlay.addEventListener('click', closePopap);

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && popap.classList.contains('active')) {
            closePopap();
        }
    });
});


