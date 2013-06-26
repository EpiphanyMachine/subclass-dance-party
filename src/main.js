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
    var pacmanAlive = true;
    for (var k = 0; k < window.dancers.Bomb.length; k++) {
      var bombTop = Math.floor(window.dancers.Bomb[k].top);
      if (Math.abs(bombTop - pacmanTop) < 25){
        // console.log('collision!');
        var waitBomb = Math.round((dancers.Bomb[k].left / $('body').width()) * 2000);
        window.dancers.Bomb.splice(k, 1); // remove from array immediately
        pacmanAlive = false;
        window.dancers.PacmanDancer.splice(j,1);
        window.setTimeout(removeDancer, waitBomb, 'PacmanDancer', j, 'explode');
        window.setTimeout(removeDancer, waitBomb, 'Bomb', k);
      }
    }
    if (pacmanAlive) {
      for (var i = 0; i < window.dancers.ColorChangingDancer.length; i++) {
        var dancersTop = Math.floor(window.dancers.ColorChangingDancer[i].top);
        if (Math.abs(dancersTop - pacmanTop) < 15){
          // console.log('collision!');
          var waitColor = Math.round((dancers.ColorChangingDancer[i].left / $('body').width()) * 2000);
          window.dancers.ColorChangingDancer.splice(i, 1); // remove from array immediately
          window.setTimeout(removeDancer, waitColor, 'ColorChangingDancer', i, 'eat');
        }
      }
    }
    if (pacmanAlive) {window.dancers.PacmanDancer.splice(j,1);} // remove from array after collision detection runs
  }
};

var removeDancer = function(dancerClass, index, soundType){
  $('.' + dancerClass + ':eq(' + index + ')').remove();
  soundType === 'eat' && eatSound.play();
  soundType === 'explode' && explodeSound.play();
};
var eatSound = new Audio("./lib/eat.wav");
var explodeSound = new Audio("./lib/explode.wav");