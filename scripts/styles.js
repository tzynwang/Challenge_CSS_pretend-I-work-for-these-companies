const headerCheckbox = document.querySelector('.header__nav-icon--checkbox')

headerCheckbox.addEventListener('change', event => {
  if (event.target.checked) {
    document.querySelector('.nav').style.top = '60px'
  } else {
    document.querySelector('.nav').style.top = 'calc(-100vh - 60px)'
  }
})
