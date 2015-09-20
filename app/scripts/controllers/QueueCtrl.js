'use strict';

angular.module('queueCastApp')
  .controller('QueueCtrl', function (EpisodesService) {
    
  	this.episodes = EpisodesService.likedEpisodes;

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
  });
