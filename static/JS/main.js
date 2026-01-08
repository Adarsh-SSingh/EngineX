const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader(){
    const header = document.getElementById('header')    
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

var homeSwiper = new Swiper(".home__slider", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
});
// Debug code 
console.log("Home Swiper container:", document.querySelector(".home__slider"));
console.log("Next button:", document.querySelector(".swiper-button-next"));
console.log("Prev button:", document.querySelector(".swiper-button-prev"));
console.log("Pagination:", document.querySelector(".swiper-pagination"));

let popularSwiper = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    },
});

let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

const linkFeatured = document.querySelectorAll('.featured__items')

function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset 

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')    

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }   
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__title , .popular__container, .features__img, .featured__filters')
sr.reveal('.home__subtitle', {delay: 500})
sr.reveal('.home__elec', {delay: 600})
sr.reveal('.home__img', {delay: 800})
sr.reveal('.home__car-data', {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal('.home__button', {delay: 1000, origin: 'bottom'})
sr.reveal('.about__group,.offer__data', { origin: 'left'})
sr.reveal('.about__data , .offer__img', { origin: 'right'})
sr.reveal('.features__card', {interval: 300})
sr.reveal('.featured__card, .logos__content, .footer__content', {interval: 100})

// Hide navbar on scroll down, show on scroll up
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    const header = document.getElementById("header");

    if (currentScroll > lastScroll && currentScroll > 80) {
        header.classList.add("hide-nav");   // hide navbar
    } else {
        header.classList.remove("hide-nav"); // show navbar
    }

    lastScroll = currentScroll;
});


/* ================= LOGIN STATE NAVBAR CONTROL ================= */

document.addEventListener("DOMContentLoaded", () => {
    const userData = localStorage.getItem("enginex_user");
    const user = userData ? JSON.parse(userData) : null;

    const loggedInItems = document.querySelectorAll(".logged-in");
    const loggedOutItems = document.querySelectorAll(".logged-out");
    const shopItems = document.querySelectorAll(".shop-only");
    const usernameDisplay = document.getElementById("usernameDisplay");

    if (user) {
        loggedInItems.forEach(el => el.style.display = "block");
        loggedOutItems.forEach(el => el.style.display = "none");

        if (usernameDisplay) {
            usernameDisplay.innerText = `Hi, ${user.username}`;
        }

        if (user.role === "shopkeeper") {
            shopItems.forEach(el => el.style.display = "block");
        }
    }
});

/* ================= LOGOUT FUNCTION ================= */
function logout() {
    localStorage.removeItem("enginex_user");
    window.location.href = "/";
}

// document.addEventListener("DOMContentLoaded", () => {
//     let user = JSON.parse(localStorage.getItem("enginex_user"));

//     const container = document.getElementById("navProfileImgContainer");

//     if (user && user.profile_pic) {
//         // If user has uploaded picture → show image
//         container.innerHTML = `
//             <img src="${user.profile_pic}"
//                  style="width:38px;height:38px;border-radius:50%;
//                  object-fit:cover;border:2px solid #00c2de;cursor:pointer;">
//         `;
//     } else {
//         // Otherwise show icon
//         container.innerHTML = `
//             <i class="ri-user-3-fill"
//                style="font-size: 22px; color: white; cursor: pointer;"></i>
//         `;
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("enginex_user"));
    const container = document.getElementById("navProfileImgContainer");
    const icon = document.getElementById("navProfileIcon");

    if (user && user.profile_pic) {

        // Show uploaded profile image
        container.style.backgroundImage = `url('${user.profile_pic}')`;
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";
        container.style.border = "2px solid #00c2de";

        icon.style.display = "none";  // hide icon
    } 
    else {
        // No image → default icon visible
        container.style.backgroundImage = "none";
        icon.style.display = "block";
    }
});

// UPDATE NAVBAR PROFILE WHEN LOCALSTORAGE CHANGES
window.addEventListener("storage", () => {
    const user = JSON.parse(localStorage.getItem("enginex_user"));
    const container = document.getElementById("navProfileImgContainer");
    const icon = document.getElementById("navProfileIcon");

    if (user && user.profile_pic) {
        container.style.backgroundImage = `url('${user.profile_pic}')`;
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";
        icon.style.display = "none";
    } else {
        container.style.backgroundImage = "none";
        icon.style.display = "block";
    }
});
