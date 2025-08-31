function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
  document.querySelector('.hamburger').classList.toggle('show');
  document.body.classList.toggle('no-scroll', document.querySelector(".nav-links").classList.contains('show'));
}