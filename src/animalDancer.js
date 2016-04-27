var animalDancer = function(top,left,timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="animal animalDancer dancer absolutePositioning"><img class="uglyDogHead animalHead animated infinite bounce" src="images/uglyDog.png"><img class="uglyDogBod animalBody animated infinite rubberBand" src="images/dogbody1.png"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

animalDancer.prototype = Object.create(makeDancer.prototype);

animalDancer.prototype.step = function() { 
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};

animalDancer.prototype.constructor = animalDancer;