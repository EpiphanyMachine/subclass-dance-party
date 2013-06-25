// Creates and returns a new dancer object that can step
var eatSound = new Audio("./lib/eat.wav");

var Dancer = function(top, left, timeBetweenSteps, dancerType){
  this._timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer ' + dancerType + '"></span>');
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(context){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // console.log('dancer step');
  context = context || this;
  setTimeout(context.step, context._timeBetweenSteps, context);
  // setTimeout(.step, this._timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left){
    /* Use css top and left properties to position our <span> tag
     * where it belongs on the page. See http://api.jquery.com/css/
     */
  var styleSettings = {
    'top': top,
    'left': left
  };
  this.$node.css(styleSettings);
};

// Dancer.prototype.$node = $('<span class="dancer"></span>');
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

var collisionDetection = function(){
  for (var j = 0; j < window.dancers.PacmanDancer.length; j++) {
    var pacmanTop = Math.floor(window.dancers.PacmanDancer[j].top);
    for (var i = 0; i < window.dancers.ColorChangingDancer.length; i++) {
      var dancersTop = Math.floor(window.dancers.ColorChangingDancer[i].top);
      if (Math.abs(dancersTop - pacmanTop) < 20){
        // console.log('Pacman: ' + dancers.PacmanDancer[j].top);
        // console.log('Dancer: ' + dancers.ColorChangingDancer[i].top);
        console.log('collision!');
        var waitTime = Math.round((dancers.ColorChangingDancer[i].left / $('body').width()) * 2000);
        window.dancers.ColorChangingDancer.splice(i,1); // remove from array immediately
        window.setTimeout(removeDancer, waitTime, 'circleDancer', i, 'eat');
      }
    }
  window.dancers.PacmanDancer.splice(j,1); // remove from array after collision detection runs
  }
};
var removeDancer = function(dancerClass, index, soundType){
  $('.' + dancerClass + ':eq(' + index + ')').remove();
  soundType === 'eat' && eatSound.play();
};