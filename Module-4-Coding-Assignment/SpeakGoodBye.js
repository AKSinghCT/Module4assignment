// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
(function (window){
var byeSpeaker = {};
var speakWord = "Good Bye";

byeSpeaker.speak = function (names) {
  console.log(speakWord + " " + names);
}
 
 window.byeSpeaker = byeSpeaker;
})(window);