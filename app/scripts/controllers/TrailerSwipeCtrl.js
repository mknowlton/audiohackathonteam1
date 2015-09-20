'use strict';

angular.module('queueCastApp')
  .controller('TrailerSwipeCtrl', function (EpisodesService) {
    // this.hitrailers = [ "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)", "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)", "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)", "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)", "url(http://files.thisamericanlife.org//sites//default//files//episodes//565_0.jpg)"];  
  	
  	this.episodes = EpisodesService.getEpisodeQueue();


  	this.getImageUrl = function (episode) {
  		console.log('url : ', episode.episode.image_urls.thumb);
  		return episode.episode.image_urls.thumb;
  		// return {'background-url' : 'url(' + episode.episode.image_urls.thumb + ')' };
  	};

  	this.getShowTitle = function (episode) {
  		return episode.episode.show_title;
  	};

  	this.getEpisodeTitle = function (episode) {
		return episode.episode.title;
  	};

  	this.getDuration = function (episode) {
  		return episode.episode.audio_files[0].duration;
  	};

  	$(document).ready(function(){


			$( "#yesClick" ).click(function() {
				swipeRightAnimation(EpisodesService.uiTriggerNext);
			});

			$( "#noClick" ).click(function() {
				swipeLeftAnimation(EpisodesService.uiTriggerNext);
			});


			$(".buddy").swipe({
			  swipeLeft:function(event, direction, distance, duration, fingerCount) {
					swipeLeftAnimation(EpisodesService.uiTriggerNext);
							
			  },
			  swipeRight:function(event, direction, distance, duration, fingerCount) {
					swipeRightAnimation(EpisodesService.uiTriggerNext);
			  }			   
			});

		});
		
		
  });


function swipeRightAnimation (triggerNextAudioFN) {
			//playAudio(30, 45);
			if (triggerNextAudioFN) {triggerNextAudioFN(true);}
			$('.buddy:visible').addClass('rotate-left').delay(700).fadeOut(1);
			$('.buddy:visible').find('.status').remove();

			$('.buddy:visible').append('<div class="status like">SAVE</div>');      
			if ( $('.buddy:visible').is(':last-child') ) {
				$('.buddy:visible:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
			} else {
				$('.buddy:visible').next().removeClass('rotate-left rotate-right').fadeIn(400);
			}
		}
		
function swipeLeftAnimation (triggerNextAudioFN) {
	//playAudio(30, 45);
	if (triggerNextAudioFN) {triggerNextAudioFN(false);}
	$('.buddy:visible').addClass('rotate-right').delay(700).fadeOut(1);
	$('.buddy:visible').find('.status').remove();
	$('.buddy:visible').append('<div class="status dislike">SKIP</div>');

	if ( $('.buddy:visible').is(':last-child') ) {
	 $('.buddy:visible:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
	 } else {
		$('.buddy:visible').next().removeClass('rotate-left rotate-right').fadeIn(400);
	} 				

}
		