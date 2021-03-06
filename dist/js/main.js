// Select DOM Items
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')

// Set Initial State of Menu

let showMenu = false

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close')
    menu.classList.add('show')
    menuNav.classList.add('show')
    menuBranding.classList.remove('close')
    menuBranding.classList.add('show')
    navItems.forEach((item) => item.classList.add('show'))

    // Set Menu State
    showMenu = true
  } else {
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('show')
    menuBranding.classList.remove('show')
    menuBranding.classList.add('close')
    navItems.forEach((item) => item.classList.remove('show'))

    // Set Menu State
    showMenu = false
  }
}
// for li.nav-item in navItems, add eventListener
navItems.forEach((item) =>
  item.addEventListener('click', (e) => select(e.target))
)
navItems.forEach((item) =>
  item.addEventListener('mouseover', (e) => navigate(e.target))
)

//define callback function that removes current from previous and adds to selected
function navigate(elt) {
  const prevItem = document.querySelector('.current')
  if (prevItem) prevItem.classList.remove('current')
  elt.parentElement.classList.add('current')
}

function select() {
  setTimeout(toggleMenu, 500)
}
