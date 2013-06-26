var PacmanDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, 0, 6000, 'PacmanDancer');
  this.top = top;
};
PacmanDancer.prototype = Object.create(Dancer.prototype);
PacmanDancer.prototype.constructor = PacmanDancer;
PacmanDancer.prototype.oldStep = Dancer.prototype.step;
PacmanDancer.prototype.step = function(context){
  context = context || this;
  context.$node.animate({'left': '150%'}, context._timeBetweenSteps);
};



var ColorChangingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, 'ColorChangingDancer');
  this.top = top;
  this.left = left;
};
ColorChangingDancer.prototype = Object.create(Dancer.prototype);
ColorChangingDancer.prototype.constructor = ColorChangingDancer;
ColorChangingDancer.prototype.oldStep = Dancer.prototype.step;
ColorChangingDancer.prototype.step = function(context){
  // call the old version of step at the beginning of any call to this new version of step
  context = context || this;
  context.oldStep(context);
  var randomHue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  context._counter = context._counter || false;
  context._counter && context.$node.css('border-color', randomHue);
  context._counter || context.$node.css('border-color', randomHue);
  context._counter = !context._counter;
};

var Bomb = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, 'Bomb');
  this.top = top;
  this.left = left;
};
Bomb.prototype = Object.create(Dancer.prototype);
Bomb.prototype.constructor = Bomb;
Bomb.prototype.oldStep = Dancer.prototype.step;
Bomb.prototype.step = function(context){
};

