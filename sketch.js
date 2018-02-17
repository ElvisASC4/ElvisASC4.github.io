// function animationClick(element, animation){
//     element = $(element);
//     element.click(
//         function() {
//             element.addClass('animated ' + animation);        
//             //wait for animation to finish before removing classes
//             window.setTimeout( function(){
//                 element.removeClass('animated ' + animation);
//             }, 2000);         
  
//         });
// }

// $(document).ready(function(){
//     $('#info').each(function() {
//         animationClick(this, 'shake');
//     });
//     $('#name').each(function() {
//         animationClick(this, 'shake');
//     });
// });
if( $(window).width() > 1000)
{
  $(document).ready(function() { /* makes learn more about me text appear */
      $('#liltext').hide().delay(5000).fadeIn(2200);
      $('#MyCanvasResume').hide().delay(5000).fadeIn(4200);
      $('#MyCanvasProjects').hide().delay(5000).fadeIn(4200);
      $('#MyCanvasActivism').hide().delay(5000).fadeIn(4200);
      drawResumeArrow();
      drawProjectArrow();
      drawActivismArrow();
  });
}

function drawResumeArrow() {
  var canvas = document.getElementById('MyCanvasResume');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // Quadratric curves example
    resumeLine(ctx);
    resumeTriangle(ctx);
  }
}

function resumeLine(ctx) {
    ctx.beginPath();
    ctx.moveTo(120, 90);
    ctx.quadraticCurveTo(20, 100, 30, 40);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.stroke();
}

function resumeTriangle(ctx) {
    ctx.beginPath();
    ctx.moveTo(30, 35);
    ctx.lineTo(45, 50);
    ctx.lineTo(15, 50);
    ctx.fillStyle = "white";
    ctx.fill();
}

function drawProjectArrow() {
  var canvas = document.getElementById('MyCanvasProjects');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // Quadratric curves example
    projectsLine(ctx);
    projectsTriangle(ctx);
  }
}

function projectsLine(ctx) {
    ctx.beginPath();
    ctx.moveTo(115, 85);
    ctx.quadraticCurveTo(200, 75, 100, 10);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.stroke();
}

function projectsTriangle(ctx) {
    ctx.beginPath();
    ctx.moveTo(92, 0);
    ctx.lineTo(120, 5);
    ctx.lineTo(90, 20);
    ctx.fillStyle = "white";
    ctx.fill();
}

function drawActivismArrow() {
  var canvas = document.getElementById('MyCanvasActivism');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // Quadratric curves example
    ActivismLine(ctx);
    ActivismTriangle(ctx);
  }
}

function ActivismLine(ctx) {
    ctx.beginPath();
    ctx.moveTo(135, 50);
    ctx.quadraticCurveTo(140, 25, 70, 10);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.stroke();
}

function ActivismTriangle(ctx) {
    ctx.beginPath();
    ctx.moveTo(67, 0);
    ctx.lineTo(95, 5);
    ctx.lineTo(65, 20);
    ctx.fillStyle = "white";
    ctx.fill();
}