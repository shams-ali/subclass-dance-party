
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top,left,timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.step = function() { 
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;