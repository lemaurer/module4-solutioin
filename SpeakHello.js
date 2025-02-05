(function () {
  var speakWord = "Hello";

  // Schritt 3: Erstelle das helloSpeaker-Objekt
  var helloSpeaker = {};

  // Schritt 4: Hänge die speak-Funktion an das helloSpeaker-Objekt
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Schritt 5: Exponiere helloSpeaker im globalen Scope
  window.helloSpeaker = helloSpeaker;

})();