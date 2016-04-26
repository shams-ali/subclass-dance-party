var catDancer = function(top,left,timeBetweenSteps){
  //coolcat
  var id = id || 'coolcat';
  makeDancer.call(this, top, left, timeBetweenSteps, id);
  this.$node = $('<span class="animalDancer dancer absolutePositioning"><img class="coolCatHead animalHead" src="images/coolcat.png"><img class="coolCatBod animalBody" src="images/catbody1.png"></span>');
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