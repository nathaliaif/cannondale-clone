// ---- Navbar changes background when Scrolled ----
const navLinks = document.querySelectorAll('.navbar__links a');
const navSearch = document.querySelector('.navbar__search a');
const navLogo = document.querySelector('.navbar__logo');
const mainNavbar = document.getElementById("navbar");

function changeLinkColor(color) {
  navSearch.style.color = color;

  navLinks.forEach(element => {
    element.style.color = color;
  })
}

function navScroll(){
  mainNavbar.classList.add('navbarScrolled');
  navLogo.setAttribute('src', 'img/cannondale-logo-black.svg');
  changeLinkColor('var(--preto)');
}

function navTop(){
  mainNavbar.classList.remove('navbarScrolled');
  navLogo.setAttribute('src', 'img/cannondale-logo-white.svg');
  changeLinkColor('var(--branco)');
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 100){
    navScroll();
  } else {
    navTop();
  }
})


// --- Show navbar items on hover ----
const navbarItems = document.querySelectorAll('.navbar__links-container li');
const navbarItemsContainer = document.querySelector('.navbar__links-container');
const navbarSublinksContainer = document.querySelector('.navbar__sublinks-container');
let uniqueClass = '';
let sublinks = '';


function showSublinksContainer(){
  navbarSublinksContainer.style.display = 'block';
  navScroll();
}

function hideSublinks(){
  navbarSublinksContainer.style.display = 'none';

  if (window.scrollY === 0){
    navTop();
  }
}

navbarItems.forEach(item => {
  item.addEventListener('mouseover', (event => {
    uniqueClass = Array.from(item.classList).find(className => className !== 'navbar__links')
    sublinks = document.querySelector(`.sublinks-${uniqueClass}`);

    if(sublinks){
      sublinks.classList.add('active');
    }
  }))

  item.addEventListener('mouseout', () => {
    uniqueClass = Array.from(item.classList).find(className => className !== 'navbar__links')
    sublinks = document.querySelector(`.sublinks-${uniqueClass}`);

    sublinks.classList.remove('active');
  })

})

navbarItemsContainer.addEventListener('mouseover', showSublinksContainer);
navbarSublinksContainer.addEventListener('mouseover', showSublinksContainer);

navbarItemsContainer.addEventListener('mouseout', (event) => {
  if (!navbarSublinksContainer.contains(event.relatedTarget)){
    hideSublinks();
  }
})

navbarSublinksContainer.addEventListener('mouseout', (event) => {
  if (!navbarItemsContainer.contains(event.relatedTarget)){
    hideSublinks();
  }
})


