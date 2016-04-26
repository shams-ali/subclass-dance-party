var animalDancer = function(top,left,timeBetweenSteps, id){
  id = id || 'uglyDog';
  makeDancer.call(this, top, left, timeBetweenSteps, id);
  this.$node = $('<span class="animalDancer dancer absolutePositioning"><img class="uglyDogHead animalHead" src="images/uglyDog.png"><img class="uglyDogBod animalBody" src="images/dogbody1.png"></span>');
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