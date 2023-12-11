window.onscroll = function() { myFunction() };

function myFunction() {
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('#navbar a');

  sections.forEach(function(section, index) {
    var rect = section.getBoundingClientRect();
    if (rect.top <= 50 && rect.bottom >= 50) {
      navLinks[index].classList.add('active');
    } else {
      navLinks[index].classList.remove('active');
    }
  });
}


document.querySelectorAll('#navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});