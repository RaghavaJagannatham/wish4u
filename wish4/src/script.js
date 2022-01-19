
var button = document.getElementById("button"),
 buttonText = document.getElementById("buttontext"),
 c = document.querySelector('#button'),
 root = document.documentElement;

/* Phrase Changer Code */
/* You can edit the phrases and images here.*/

button.onclick = (function(){
  
var phrases = ["Click Me", "Happy Birthday!", "I Love you", "You are awesome", "Keep up the good work", "Cat lover", "Relax like Ms. Kitty", "Meet you again soon", "Wish you the best!"],
  
  bImages = ["https://i.imgur.com/Q2ZST9f.jpeg", "https://i.imgur.com/saf2C0e.gif","https://i.imgur.com/Hdix4fN.jpg",
      "https://i.imgur.com/mYcAgr3.png", 
      "https://i.imgur.com/Hdix4fN.jpg", "https://i.imgur.com/4clqUdj.jpg","https://i.imgur.com/binfCky.jpg", "https://ak.picdn.net/shutterstock/videos/3153106/thumb/1.jpg", "https://birthdaycake24.com/uploads/worigin/2019/06/11/happy-birthday-cake-with-name-birthdaycake245cff57627fae2_1239920b09a2d01c20f8265f4a0e3efd.gif"];
  
 var count = 0;
 var imageCount = 0;
  return function(){
  root.style.setProperty('--image', "url(" + bImages[++count % phrases.length] + ")");
  buttonText.textContent = phrases[++imageCount % phrases.length];
  };
}());


/* if(count>7){
  do: release balloons/confetti/or something cool;
}
*/