'use strict';

angular.module('queueCastApp')
  .service('EpisodesService', EpisodesService);

function EpisodesService() {
	this.liked = [];
	this.disliked = [];
	this.toView = [];

	//TODO: add lodash for this
	this.likeEpisode = function (id) {

	}
}