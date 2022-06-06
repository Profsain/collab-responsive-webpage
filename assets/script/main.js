const mobileNavigation = document.querySelector('.mobile-navigation');
const openButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');

const toggleMobileNav = () => {
  if (mobileNavigation.classList.contains('mobile-navigation-open')) {
    mobileNavigation.classList.remove('mobile-navigation-open');
  } else {
    mobileNavigation.classList.add('mobile-navigation-open');
  }
}

openButton.addEventListener('click', toggleMobileNav);
closeButton.addEventListener('click', toggleMobileNav)