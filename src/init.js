$(document).ready(function() {
  window.dancers = [];
  var bgImgArr = ['abuDabi', 'nightClub', 'house'];
  var audioArr = ['audio/deadmau5-veldt.mp3', 'audio/rihanna-work.mp3','audio/ab-AI.mp3'];
  var dancerAction = ['bounce', 'wobble', 'rubberBand'];
  var dogAction = ['bounce','rubberBand'];
  var catAction = ['wobble','tada'];
  var bgIndex = 0;
  var lastBgIndex = 2;
  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random() + 18,
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    $('.animal').hover(function(){
      $(this).children('img').addClass('flip');
    }, function(){
      var $that = $(this);
      setTimeout(function(){
        $that.children('img').removeClass('flip');
      }, 1000);
    });
  });

  $('.lineUpButton').on('click',function(){
    if($('.dancer').hasClass('lineUp')){
      $('.lineUpButton').text('Line Up');
      $('.dancer').removeClass('lineUp');
      for(var i = 0; i < window.dancers.length; i++){
        var top = $("body").height() * Math.random();
        var left = $("body").width() * Math.random();
        window.dancers[i].setPosition(top,left);
      }
    }else{
      $('.lineUpButton').text('Spread Out');
      $('.dancer').addClass('lineUp');
      $('.dancer').children('img').removeClass('tada wobble bounce rubberBand shake swing');
      $('.dancer').children('img').addClass(dancerAction[bgIndex]);
      for(var i = 0; i < window.dancers.length; i++){
        var top = $('body').height()/2;
        var windowWidth = $('body').width();
        var left = i * (windowWidth/window.dancers.length);
        window.dancers[i].setPosition(top,left);
      }
    }
  });
  $('.clearButton').on('click',function(){
    $('.dancer').remove();
  });
  $('.danceFloor').on('click', function() {
    if (bgIndex === bgImgArr.length - 1) {
      bgIndex = 0;
      lastBgIndex = 2;
    } else {
      bgIndex++;
      lastBgIndex = bgIndex-1;
    }

    $('body').removeClass(bgImgArr[lastBgIndex]);
    $('body').addClass(bgImgArr[bgIndex]);

    //Audio
    $('source').attr('src', audioArr[bgIndex]);
    $('audio').load();

    //Dancers
    $('.dancer').children('img').removeClass(dancerAction[lastBgIndex]);
    //Dog
    $('.uglyDogHead').addClass('bounce');
    $('.uglyDogBod').addClass('rubberBand');

    //Cat
    $('.coolCatHead').addClass('wobble');
    $('.coolCatBod').addClass('tada');

    //Mouse
    $('.playerHead').addClass('swing');
    $('.playerBod').addClass('shake');
  });

  /// GAME MODE
  $('.createPlayerBtn').on('click',function(){
    $('a').attr('disabled', true);
  });
  
  /*$(document).keydown(function(e){
    var left = $('.player').width();
    var top = $('.player').height();
    switch(e.which){
    case 37: //left
      //var left = $('.player').width();
      $('.player').css('left', left--);
      break;

    case 38: //up
      //var top = $('.player').height();
      $('.player').css('top', top--);
      break;

    case 39: //right
      //var right = $('.player').width();
      $('.player').css('left', left++);
      break;

    case 40: //down
      //var bottom = $('.player').height();
      $('.player').css('top', top++);
      break;
    default: return;
    }
    e.preventDefault();
  });*/
  
  /*
  function doKeyDown(e){
    if(e.keyCode === 37){
      leftKeyPress();
    }
    if(e.keyCode === 38){
      upKeyPress();
    }
    if(e.keyCode === 39){
      rightKeyPress();
    }
    if(e.keyCode === 40){
      downKeyPress();
    }
  }
  
  var leftKeyPress = function(){
    console.log("left");

  };

  var upKeyPress = function(){
    console.log("up");
  };

  var rightKeyPress = function(){
    console.log("right");
  };

  var downKeyPress = function(){
    console.log("down");
  };

  window.addEventListener('keydown', function(e){
    doKeyDown(e);
  });
  */
});


