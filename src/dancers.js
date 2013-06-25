var PacmanDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, 0, 6000, 'pacman');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

PacmanDancer.prototype = Object.create(Dancer.prototype);
PacmanDancer.prototype.constructor = PacmanDancer;
PacmanDancer.prototype.oldStep = Dancer.prototype.step;
PacmanDancer.prototype.step = function(context){
  // call the old version of step at the beginning of any call to this new version of step
  context = context || this;
  // console.log(context);
  // context.oldStep(context);

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  // context._counter = context._counter || false;

    // if (context._counter){
      context.$node.animate({'left': '150%'}, context._timeBetweenSteps);
      // context.$node.css({
      // '-webkit-transform': 'rotate(360deg)',
      // '-moz-transform': 'rotate(360deg)',
      // '-ms-transform': 'rotate(360deg)',
      // '-o-transform': 'rotate(360deg)',
      // 'transform': 'rotate(360deg)',
      // 'zoom': 1
      // });
    // }
  // context._counter || context.$node.css({
  //     '-webkit-transform': 'rotate(180deg)',
  //     '-moz-transform': 'rotate(180deg)',
  //     '-ms-transform': 'rotate(180deg)',
  //     '-o-transform': 'rotate(180deg)',
  //     'transform': 'rotate(180deg)',
  //     'zoom': 1
  //   }, context._timeBetweenSteps);


  // context._counter = !context._counter;

};

var ColorChangingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, 'circleDancer');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

ColorChangingDancer.prototype = Object.create(Dancer.prototype);
ColorChangingDancer.prototype.constructor = ColorChangingDancer;
ColorChangingDancer.prototype.oldStep = Dancer.prototype.step;
ColorChangingDancer.prototype.step = function(context){
  // call the old version of step at the beginning of any call to this new version of step
  context = context || this;
  // console.log(context);
  context.oldStep(context);
  // var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  context._counter = context._counter || false;
  context._counter && context.$node.css('border-color','rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')');
  context._counter || context.$node.css('border-color','rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')');
  context._counter = !context._counter;
    // $(context).css("color", "green");
};
