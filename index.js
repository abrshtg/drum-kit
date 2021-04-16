var numberOfDrums = document.querySelectorAll('.drum').length;
// var w = new Audio('sounds/crash.mp3');
// var a = new Audio('sounds/kick-bass.mp3');
// var s = new Audio('sounds/snare.mp3');
// var d = new Audio('sounds/tom-1.mp3');
// var j = new Audio('sounds/tom-2.mp3');
// var k = new Audio('sounds/tom-3.mp3');
// var l = new Audio('sounds/tom-4.mp3');
// var keys = [w, a, s, d, j, k, l];
// console.log(keys[1]);
for (var i = 0; i<numberOfDrums; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click', function (e){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  addAnimation(buttonInnerHTML);
  });
}



document.addEventListener('keypress', function(e){
  makeSound(e.key);
  addAnimation(e.key);
})



function makeSound(event){
  switch (event) {
    case 'w':
      var w = new Audio('sounds/crash.mp3');
        w.play();
      break;
    case 'a':
      var a = new Audio('sounds/tom-1.mp3');
      a.play();
      break;
    case 's':
      var s = new Audio('sounds/snare.mp3');
      s.play();
      break;
    case 'd':
      var d = new Audio('sounds/tom-1.mp3');
      d.play();
      break;
    case 'j':
      var j = new Audio('sounds/tom-2.mp3');
      j.play();
      break;
    case 'k':
      var k = new Audio('sounds/tom-3.mp3');
      k.play();
      break;
    case 'l':
      var l = new Audio('sounds/tom-4.mp3');
      l.play();
      break;
    default:
      console.log('Unkown key');

  };
}


function addAnimation(content){
  var element = document.querySelector('.'+content).classList;
  element.add('pressed');
  setTimeout(function(){
    element.remove('pressed');
  }, 100);

}
