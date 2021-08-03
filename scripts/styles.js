const headerCheckbox = document.querySelector('.header__nav-icon--checkbox')
const modeSwitch = document.querySelector('.service-call')

// mobile nav-bar open/close
headerCheckbox.addEventListener('change', event => {
  if (event.target.checked) {
    document.querySelector('.nav--mobile').style.top = '80px'
  } else {
    document.querySelector('.nav--mobile').style.top = 'calc(-100vh - 80px)'
  }
})

// dark mode
modeSwitch.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme', 'dark')
})
