const navLinks = document.querySelectorAll('.nav-link')
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 100

  // Handle the "Home" link separately
  if (fromTop < sections[1].offsetTop) {
    navLinks.forEach((navLink) => {
      navLink.classList.remove('active')
    })
    navLinks[0].classList.add('active')
    return
  }

  sections.forEach((section, index) => {
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove('active')
      })
      navLinks[index].classList.add('active')
    }
  })
})
