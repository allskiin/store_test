var overlay1 = document.getElementById("overlay_menu");
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function(){
    if(menu.style.right === "0px"){
        menu.style.right = "-250px";
        overlay1.style.display = "none";
    }else{
        menu.style.right = "0px";
        overlay1.style.display = "block";
    }
});

// fechar menu quando clicado em qualquer parte
document.addEventListener("click", function(event){
    if(event.target !== botaoMenu && !menu.contains(event.target) && window.innerWidth < 1024){
        menu.style.right = "-250px";
        overlay1.style.display = "none";
    }
});

// ofuscar o resto quando aberto o user
var overlay = document.getElementById("overlay");
const botaoUser = document.getElementById("botao-user");
const pagUser = document.getElementById("user");

botaoUser.addEventListener("click", function(){
    if(pagUser.style.bottom === "0px"){
        pagUser.style.bottom = "-250px";
        overlay.style.display = "none";
    }else{
        pagUser.style.bottom = "0px";
        overlay.style.display = "block";
    }
    
});

// fechar menu quando clicado em qualquer parte
document.addEventListener("click", function(event){
    if(event.target !== botaoUser && !pagUser.contains(event.target)){
        pagUser.style.bottom = "-250px";
        overlay.style.display = "none";
    }
});


// tema
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bi-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bi-moon' : 'bi-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bi-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// swiper 1
var swiper = new Swiper('.swiper', {
    
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay:{
        delay: 2500,
        disableOnInteraction: false
    },
});

// slider product
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

// abrir login
var overlay2 = document.getElementById("overlay_login");
const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('closeLogin');
const login = document.getElementById('border_login');

openLogin.addEventListener('click', () => {
    login.classList.remove('login_frame');
        setTimeout(() => {
            pagUser.style.bottom = "-250px";
            overlay2.style.display = "block";
            login.style.opacity = '1';
        }, 100);
});

closeLogin.addEventListener('click', () => {
    login.style.opacity ='0';
    setTimeout(() => {
        overlay.style.display = "block";
        pagUser.style.bottom = "0px";
        overlay2.style.display = "none";
        login.classList.add('login_frame');
    }, 100);
});