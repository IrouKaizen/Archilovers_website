/* change background header */
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*Scroll sections active link*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageXOffset

    sections.forEach(current => {
        const sectionHeight = current.OffsetHeight,
            sectionTop = current.OffsetTop - 58,
            sectionId = current.getAttribute('Id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else{
            document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/* swiper popular */
var swiperPopular = new Swiper(".popular__container",{
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView:'auto',
    loop: true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/**slides */

const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        removeActionClasses()
        panel.classList.add('active')
    })
})

function removeActionClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

/* testimony */
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

  /*Scroll up 
function scrollUp () {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)*/

/*Dark theme*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the theme after validation
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

//validate
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'] (iconTheme)
}

//active/desactive
themeButton.addEventListener('click', () =>{
    //add or remove the dark/ icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //save the theme
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//scroll
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal('.home__title, .containe, .subscribe__container, .footer__container')
sr.reveal('.home__description .footer__info', {delay: 500})
sr.reveal('.home__search', {delay: 600})
sr.reveal('.home__value', {delay: 700})
sr.reveal('.home__images', {delay: 800, origin: 'bottom'})
sr.reveal('.logos__img', {interval: 100})
sr.reveal('.value__images, .contact__content', {origin: 'left'})
sr.reveal('.value__content, .contact__images', {origin: 'right'})
