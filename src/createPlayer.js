var createPlayer = function(top,left, timeBetweenSteps){
  makeDancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="animal animalDancer dancer player absolutePositioning"><img class="playerHead animalHead animated infinite swing" src="images/playerHead.png"><img class="playerBod animalBody animated infinite shake" src="images/playerMouse.png"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top,left);
};

createPlayer.prototype = Object.create(makeDancer.prototype);

createPlayer.prototype.step = function() { 
  makeDancer.prototype.step.call(this);
  this.$node.animate();
};

createPlayer.prototype.constructor = createPlayer;
