'use strict';

angular.module('queueCastApp')
.directive('audioQc', AudioDirective);

// function AudioDirective() {
function AudioDirective(EpisodesService) {

	return {
		restrict: 'E',
		scope: {
			isPlaying: '='
		},
		template:'',
		link: function(scope, elem, attr) {
			// scope.epService = EpisodesService;
			EpisodesService.resetQueue();
			EpisodesService.clearAudioDecks();

			// scope.initPlayback();
			EpisodesService.playNext();
		},

		controller: function($scope) {
		}
	}
}