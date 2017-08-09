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