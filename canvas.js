$(document).ready(function() {

		  var PlayGroundWidth = 700;
		  var PlayGroundHeight = 250;
		  var RefreshRate = 30;

		  var smallStarSpeed = 1;
		  var mediumStarSpeed = 3;
		  var bigStartSpeed = 5;
                                
          $(function () {

          var background1 = new $.gameQuery.Animation({imageURL: ""});
          var background2 = new $.gameQuery.Animation({imageURL: ""});
          var background3 = new $.gameQuery.Animation({imageURL: ""});
          var background4 = new $.gameQuery.Animation({imageURL: ""});
          var background5 = new $.gameQuery.Animation({imageURL: ""});
          var background6 = new $.gameQuery.Animation({imageURL: ""});          

          });

          $('#playground').playground({
              widht: PlayGroundWidth;
              height: PlayGroundHeight;
              keyTracker: true;
          });


          $.playground().

          .addSprite('background1', {animation: background1, widht: PlayGroundWidth, height: PlayGroundHeight})
          .addSprite('background2', {animation: background1, widht: PlayGroundWidth, height: PlayGroundHeight})
          .addSprite('background3', {animation: background1, widht: PlayGroundWidth, height: PlayGroundHeight})
          .addSprite('background4', {animation: background1, widht: PlayGroundWidth, height: PlayGroundHeight})
          .addSprite('background5', {animation: background1, widht: PlayGroundWidth, height: PlayGroundHeight})
          .addSprite('background6', {animation: background1, widht: PlayGroundWidth, height: PlayGroundHeight})


          $().setLoadBar('loadingBar', 400);

          $('#startbutton').click(function(){
             $.playground().startGame(function(){
               $('#welcomeScreen').remove();
             });
          };

           
          $playground().registerCallback(function(){
          	var newPos =  (parseInt($('#background1').css('left'))
          	$('background1').css('left', newPos);

          	newPos =  (parseInt($('#background2').css('left'))
          	$('background1').css('left', newPos);

          	newPos =  (parseInt($('#background3').css('left'))
          	$('background1').css('left', newPos);

          	newPos =  (parseInt($('#background4').css('left'))
          	$('background1').css('left', newPos);

          	newPos =  (parseInt($('#background5').css('left'))
          	$('background1').css('left', newPos);

          	newPos =  (parseInt($('#background6').css('left'))
          	$('background1').css('left', newPos);


          } RefreshRate);

});          
