'use strict';

angular.module('queueCastApp')
  .controller('TrailerSwipeCtrl', function () {
    this.hitrailers = [ "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)", "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)", "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)", "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)", "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)"];  
  });




	var soundHandle = document.getElementById('soundHandle');
		var segmentEnd;
		if(soundHandle) {
		
		soundHandle.addEventListener('timeupdate', function (){
			if (segmentEnd && soundHandle.currentTime >= segmentEnd) {
				soundHandle.pause();
			}   
			console.log(soundHandle.currentTime);
		}, false);
		}

		$(document).ready(function(){

			$( "#yesCLick" ).bind( "tap", swipeRightAnimation );

			$(".buddy").on("swiperight",function(){
				playAudio(30, 45);
				$(this).addClass('rotate-left').delay(700).fadeOut(1);
			  $('.buddy').find('.status').remove();

			  $(this).append('<div class="status like">SAVE</div>');      
			  if ( $(this).is(':last-child') ) {
				$('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
			   } else {
				  $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
			   }

			});  

			$( "#noCLick" ).bind( "tap", swipeLeftAnimation );

		   $(".buddy").on("swipeleft",function(){
		   		playAudio(30, 45);
				$(this).addClass('rotate-right').delay(700).fadeOut(1);
			$('.buddy').find('.status').remove();
			$(this).append('<div class="status dislike">SKIP</div>');

			if ( $(this).is(':last-child') ) {
			 $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
			  alert('Na-na!');
			 } else {
				$(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
			} 
		  });

		});
		
		function swipeRightAnimation () {
			playAudio(30, 45);
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
			playAudio(30, 45);
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
	