// Creates and returns a new dancer object that can step

var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  //console.log('timeBetweenSteps is now:',timeBetweenSteps);
  console.log('this is:', this);
  this.step();// fiGURE THIS OUT
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

makeDancer.prototype.step = function(){
  //console.log(that);
  //console.log(this);
  var that = this;
  //console.log('Step function is:', that.step);
  //console.log('Time between steps:', that.timeBetweenSteps);
  console.log('makeDancer.step was called');
  setTimeout(function(){
    console.log('settimeout was called');
    that.step();
  }, that.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top,left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


/*
// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');

  dancer.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};
*/

