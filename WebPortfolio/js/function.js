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


//Bouncing Balls
var canvas = document.getElementById("canvas");
var canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext('2d');

  var balls = [];

     for (var i = 0; i <50; i++) {
      // x and y are the coordinates of the circle
     
        var x = Math.floor(Math.random() * innerWidth);
        var y = Math.floor(Math.random() * innerHeight);
        var vx = Math.floor(Math.random() * i);
        var vy = Math.floor(Math.random() * i);
        var radius = 20;
      
        var color = getRandomColor();

        balls.push({ x, y, vx, vy, radius, color });
   }

   function move() {
       requestAnimationFrame(move);

       ctx.clearRect(0, 0, innerWidth, innerHeight);

       for (var i = 0; i < balls.length; i++) {
            var ball = balls[i];

            ctx.beginPath();
            ctx.fillStyle = ball.color;
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
            ctx.fill();

           if (ball.radius + ball.x > innerWidth || ball.x - ball.radius < 0) {
               ball.vx = 0 - ball.vx;
           }

           if (ball.y + ball.radius > innerHeight || ball.y - ball.radius < 0) {
               ball.vy = 0 - ball.vy;
            }

            ball.x = ball.x + ball.vx;
            ball.y = ball.y + ball.vy;
       }
    }

     function getRandomColor() {
         var letters = '0123456789ABCDEF';
          var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    move();
