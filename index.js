// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

const projectToggleMap = {
  mw4: document.querySelector('[data-project-toggle="mw4"]'),
}

const projectParams = new URLSearchParams(window.location.search)

Object.entries(projectToggleMap).forEach(([projectKey, projectElement]) => {
  if (!projectElement) return

  const projectParamValue = projectParams.get(projectKey)
  const isEnabled = projectParamValue !== null && projectParamValue.toLowerCase() === 'true'
  projectElement.classList.toggle('project-toggle--hidden', !isEnabled)
  projectElement.hidden = !isEnabled
})

// Back to top button behavior
const backToTopBtn = document.getElementById('backToTop')
if (backToTopBtn) {
  const showAfter = 300 // px scrolled before showing
  const onScroll = () => {
    if (window.scrollY > showAfter) backToTopBtn.classList.remove('d-none')
    else backToTopBtn.classList.add('d-none')
  }
  window.addEventListener('scroll', onScroll)

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  // initial check
  onScroll()
}
