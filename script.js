// Mobile Navigation Toggle: show or hide menu on small screens
document.getElementById('nav-toggle').addEventListener('click', function () {
  // Toggle the "active" class on the nav menu to show/hide it
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
});
