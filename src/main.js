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
  context = context || this;
  setTimeout(context.step, context._timeBetweenSteps, context);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    'top': top,
    'left': left
  };
  this.$node.css(styleSettings);
};



var collisionDetection = function(){
  for (var j = 0; j < window.dancers.PacmanDancer.length; j++) {
    var pacmanTop = Math.floor(window.dancers.PacmanDancer[j].top);
    for (var i = 0; i < window.dancers.ColorChangingDancer.length; i++) {
      var dancersTop = Math.floor(window.dancers.ColorChangingDancer[i].top);
      if (Math.abs(dancersTop - pacmanTop) < 20){
        // console.log('collision!');
        var waitTime = Math.round((dancers.ColorChangingDancer[i].left / $('body').width()) * 2000);
        window.dancers.ColorChangingDancer.splice(i,1); // remove from array immediately
        window.setTimeout(removeDancer, waitTime, 'ColorChangingDancer', i, 'eat');
      }
    }
  window.dancers.PacmanDancer.splice(j,1); // remove from array after collision detection runs
  }
};

var removeDancer = function(dancerClass, index, soundType){
  $('.' + dancerClass + ':eq(' + index + ')').remove();
  soundType === 'eat' && eatSound.play();
};