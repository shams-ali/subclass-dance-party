// Creates and returns a new dancer object that can step

var makeDancer = function(top, left, timeBetweenSteps, id) {
  
  // use jQuery to create an HTML <span> tag

  this.$node = $('<span class="dancer light"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function(){
  var that = this;
  setTimeout(function(){
    that.step();
  }, that.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top,left){
  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
};

