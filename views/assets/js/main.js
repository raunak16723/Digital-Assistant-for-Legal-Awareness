/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') :
        header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 80,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        // console.log(sectionsClass)



        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // console.log("added: ", sectionId)
            sectionsClass?.classList.add('active-link')
        } else {
            // console.log("remove: ", sectionId)
            sectionsClass?.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/
const triggerButton = document.getElementById('show_para');
const fadeElements = document.querySelectorAll('.fade');
const paraVisible = () => {
    const scrollY = window.pageYOffset

    // console.log("para",scrollY)

    if (scroll < 1000) {
        return;
    }

    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate');
        }, index * 500); // Adjust delay here (500ms = 0.5s)
    });

}

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
        paraVisible();
    } else {
        scrollUp.classList.remove('show-scroll')

    }
    // this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
    //     scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SHOW CART ===============*/

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
// if (selectedTheme) {
//     // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
// }

// Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })

/*=============== SCROLL REVEAL ANIMATION===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // ANimation repeat
})

sr.reveal(`.home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content, .footer__info, .contacttext, .contact-in, .contact-form`)
sr.reveal(`.home__data`, {
    origin: 'bottom'
})
sr.reveal(`.about__data, .recently__data `, {
    origin: 'left'
})
sr.reveal(`.about__img, .recently__img, .chat_area`, {
    origin: 'right'
})
sr.reveal(`.popular__card`, {
    interval: 100
})
sr.reveal(`.paper, .chat_img`, {
    origin: 'left'
})




// triggerButton.addEventListener('click', () => {
//     fadeElements.forEach((element, index) => {
//         setTimeout(() => {
//             element.classList.add('animate');
//         }, index * 500); // Adjust delay here (500ms = 0.5s)
//     });
// });


// window.addEventListener('scroll', paraVisible)

// document.querySelectorAll("#Queries h2").forEach((e) => {
//     e.addEventListener("click", () => {
//         console.log("hey")
//         console.log(document.getElementById("paperContent"))
//         document.getElementById("paperContent").scrollIntoView({
//             behavior: "smooth", // Optional: smooth scrolling effect
//             block: "start" // Optional: align the top of the #paperContent element with the top of the viewport
//         });

//     })

// })

document.addEventListener("DOMContentLoaded", function() {
    let a =  document.querySelectorAll("#Queries h2");
    console.log(a);
    document.querySelectorAll("#Queries h2").forEach((heading) => {
        heading.addEventListener("click", () => {
            const targetElement = document.querySelector("#paperContent");
            const offset = -100; // Adjust this value as needed
            const targetOffsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: targetOffsetTop + offset,
                behavior: "smooth"
            });
        });
    });
});


// let a =  document.querySelectorAll("#Queries h2");
// console.log(a);
// document.querySelectorAll("#Queries h2").forEach((heading) => {
//     heading.addEventListener("click", () => {
//         const targetElement = document.querySelector("#paperContent");
//         const offset = -100; // Adjust this value as needed
//         const targetOffsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
//         window.scrollTo({
//             top: targetOffsetTop + offset,
//             behavior: "smooth"
//         });
//     });
// });

