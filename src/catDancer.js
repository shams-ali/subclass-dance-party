var catDancer = function(top,left,timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="animal animalDancer dancer absolutePositioning"><img class="coolCatHead animalHead animated infinite wobble" src="images/coolcat.png"><img class="coolCatBod animalBody animated infinite tada" src="images/catbody1.png"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

catDancer.prototype = Object.create(makeDancer.prototype);

catDancer.prototype.step = function() { 
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};

catDancer.prototype.constructor = catDancer;