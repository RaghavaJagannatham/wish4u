var button = document.getElementById("button"),
 buttonText = document.getElementById("buttontext"),
 c = document.querySelector('#button'),
 root = document.documentElement;

/* Phrase Changer Code */
/* You can edit the phrases and images here.*/

button.onclick = (function(){
  
var phrases = ["Click Me", "Happy Birthday!","Birthday Girl", "You Means A Lot", "You are awesome", "Keep up the good work", "Doremon Love", "Will Fight Again", "BDay Girl...!"],
  
  bImages = ["https://i.pinimg.com/originals/eb/95/e2/eb95e2837964704d73cf82583915a4ea.gif", "https://i.imgur.com/NfJGnv6.gif","https://i.pinimg.com/originals/01/38/06/0138062cafd76649d464f756402676b5.gif",
      "https://i.ytimg.com/vi/mZt3m-6cHgs/maxresdefault.jpg", 
      "https://data.whicdn.com/images/322479804/original.gif", "https://pbs.twimg.com/tweet_video_thumb/D3F5HmfV4AAnyy-.jpg", "https://i.pinimg.com/originals/f9/fe/6f/f9fe6ff162bd66abc7089d7883db466c.gif", "https://i.pinimg.com/originals/55/dd/7c/55dd7c08ecfc80a4c11221e8b29cea2f.jpg","https://ih1.redbubble.net/image.1440039363.6041/pp,840x830-pad,1000x1000,f8f8f8.jpg"];
  
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