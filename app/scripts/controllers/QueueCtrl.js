'use strict';

angular.module('queueCastApp')
  .controller('QueueCtrl', function (EpisodesService) {
    
  	this.episodes = EpisodesService.getEpisodeQueue();

  	this.getImageStyle = function (episode) {
  		return {'background-url' : 'url(' + episode.episode.image_urls.thumb + ')' };
  	};

  	this.getShowTitle = function (episode) {
  		return episode.episode.showTitle;
  	};

  	this.getEpisodeTitle = function (episode) {
		return episode.episode.title;
  	};

  	this.getEpisodeDescription = function (episode) {
  		return episode.text; //no idea if this is right!
  	};

  	this.getDuration = function (episode) {
  		return episode.episode.audio_files[0].duration;
  	};
  });
