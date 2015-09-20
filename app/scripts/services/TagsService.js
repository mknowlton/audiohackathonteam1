'use strict';

angular.module('queueCastApp')
  .service('TagsService', TagsService);

function TagsService() {
	this.liked = [];
	this.disliked = [];
}