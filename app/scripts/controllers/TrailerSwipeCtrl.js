'use strict';

angular.module('queueCastApp')
  .controller('TrailerSwipeCtrl', function () {
    this.hitrailers = [ "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)", "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)", "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)", "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)", "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)"];  
  });


      	var soundHandle = document.getElementById('soundHandle');
		var segmentEnd;

		if (soundHandle) {
			soundHandle.addEventListener('timeupdate', function (){
				if (segmentEnd && soundHandle.currentTime >= segmentEnd) {
					soundHandle.pause();
				}   
				console.log(soundHandle.currentTime);
			}, false);
		}
		
		$(document).ready(function(){


			$( "#yesClick" ).click(function() {
				swipeRightAnimation();
			});

			$( "#noClick" ).click(function() {
				swipeLeftAnimation();
			});


			$(".buddy").swipe({
			  swipeLeft:function(event, direction, distance, duration, fingerCount) {
					swipeLeftAnimation();
							
			  },
			  swipeRight:function(event, direction, distance, duration, fingerCount) {
					swipeRightAnimation();
			  }			   
			});

		});
		
		function swipeRightAnimation () {
			//playAudio(30, 45);
			$('.buddy:visible').addClass('rotate-left').delay(700).fadeOut(1);
			$('.buddy:visible').find('.status').remove();

			$('.buddy:visible').append('<div class="status like">SAVE</div>');      
			if ( $('.buddy:visible').is(':last-child') ) {
				$('.buddy:visible:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
			} else {
				$('.buddy:visible').next().removeClass('rotate-left rotate-right').fadeIn(400);
			}
		}
		
		function swipeLeftAnimation () {
			//playAudio(30, 45);
			$('.buddy:visible').addClass('rotate-right').delay(700).fadeOut(1);
			$('.buddy:visible').find('.status').remove();
			$('.buddy:visible').append('<div class="status dislike">SKIP</div>');

			if ( $('.buddy:visible').is(':last-child') ) {
			 $('.buddy:visible:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
			  alert('Na-na!');
			 } else {
				$('.buddy:visible').next().removeClass('rotate-left rotate-right').fadeIn(400);
			} 				

		}

		function playAudio(startTime, endTime){
			soundHandle.src = 'http://hackathon-audio.thisamericanlife.org//audio//566//566.mp3';
			segmentEnd = endTime;
			soundHandle.currentTime = startTime;
			soundHandle.play();
		}		