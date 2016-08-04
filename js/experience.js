// document.onreadystatechange = function () {
//     if (document.readyState === 'interactive') {
//
//         var timeline = new TimelineLite()
//         .to('#message1', 1, {rotation: '+=360'})
//         // .to('#message1', 1, {scale: 2})
//
//         // setTimeout(function(){
//         //     timeline.reverse()
//         // }, 1000)
//     }
// }
window.onload = function() {
  var cruiseShip = document.getElementById("cruiseShip");
  TweenLite.to(cruiseShip, 25, {left:"650px", repeat: 2});
  //this makes the ship go across the ocean.
  var timeline = new TimelineLite()
  .to('#message1', 1, {rotation: '+=360'});

  var logoHere = document.getElementById("logoHere");
  TweenLite.to(logoHere, 1, {top:"100px"});

}
