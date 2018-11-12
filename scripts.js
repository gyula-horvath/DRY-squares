var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var cw = 450;
var ch = 300;

var a = 40;

var starterCw = cw/23;
var starterCh = ch/15;

context.fillStyle = 'rgba(215, 133, 44, 0.5)';
for (var i=0; i<10; i++) {
  context.fillRect(starterCw + i * a / 2, starterCh + i * a / 2, a, a);
}
