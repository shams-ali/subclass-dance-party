$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    $('.animal').hover(function(){
      $(this).children('img').addClass('flip');
      //$('.animalBody').removeClass('infinite');
    }, function(){
      var $that = $(this);
      setTimeout(function(){
        $that.children('img').removeClass('flip');
      }, 1000);
      //$('.animalBody').addClass('infinite');
    });
  });

  $('.lineUpButton').on('click',function(){
    //var mid = $('body').height()/2;
    //var width = 0;
    if($('.dancer').hasClass('lineUp')){
      $('.dancer').removeClass('lineUp');
      for(var i = 0; i < window.dancers.length; i++){
        var top = $("body").height() * Math.random();
        var left = $("body").width() * Math.random();
        window.dancers[i].setPosition(top,left);
      }
    }else{
      //$('.dancer').css('top', '50%');
      $('.dancer').addClass('lineUp');
      for(var i = 0; i < window.dancers.length; i++){
        var top = $('body').height()/2;
        var windowWidth = $('body').width();
        var left = (i*100) + (windowWidth/window.dancers.length);
        window.dancers[i].setPosition(top,left);
        //$(this).children('img').css('transition', 'top 5s');
      }
    }
  });
  $('.clearButton').on('click',function(){
    $('.dancer').remove();
  });

});