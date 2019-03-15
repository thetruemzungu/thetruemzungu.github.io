document.addEventListener('DOMContentLoaded', function(){
  var speechBubble = document.querySelector('#speech-bubble')
  setTimeout(function(){
    speechBubble.classList.add('active')
  }, 3000);
})