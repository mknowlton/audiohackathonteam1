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
			scope.epService = EpisodesService;
			scope.resetQueue();
			scope.clearAudioDecks();

			// scope.initPlayback();
			scope.playNext();
		},

		controller: function($scope) {
			$scope.audioDecks = [new p5AudioElt(), new p5AudioElt()];

			$scope.getnextepisode = function() {
				// TO DO
				// $scope.epService
			},

			$scope.clearAudioDecks = function() {
				for (var i = 0; i < $scope.audioDecks.length; i++) {
					$scope.audioDecks[i].stop();
				}
				$scope.loadDeck($scope.epIndex);
				$scope.loadDeck($scope.epIndex + 1);
			},

			$scope.resetQueue = function() {
				$scope.epIndex = 0;
				$scope.cueIndex = 0;
			},

			$scope.startPlaying = function() {
				$scope.isPlaying = true;
			},

			$scope.stopPlaying = function() {
				$scope.isPlaying = false;
				$scope.clearAudioDecks();
			},

			$scope.loadDeck = function(epIndex) {
				console.log($scope.audioDecks);
				var q = EpisodesService.episodeQueue;

				if (epIndex >= q.length) {
					console.log('no more to load');
					return null;
				} else {
					// which deck to use
					var i = epIndex % $scope.audioDecks.length;
					var deck = $scope.audioDecks[i];

					// which episode to load
					var episode = q[epIndex];
					deck.src(episode.mp3src);
					deck.load();
					deck.time(episode.cues[0].start_time);
				}
			},

			$scope.playNext = function() {
				var epIndex = $scope.epIndex;
				var epQueue = $scope.epService.episodeQueue;
				var	audioElt = $scope.audioDecks[epIndex % 2];

				// just play the first cue (TO DO: remove this)
				var cueIndex = 0;
				clearAudioElementCues($scope.audioDecks);

				// if there is another episode to play... play it!
				if ($scope.epIndex < epQueue.length - 1) {
					audioElt.stop();
					$scope.epIndex++;

					// prepare the next deck...
					$scope.loadDeck($scope.epIndex + 1);

					// reset the deck and play it
					audioElt = $scope.audioDecks[$scope.epIndex % 2];
					audioElt.play();
					window.audioElt = audioElt;
					var ep = $scope.epService.episodeQueue[$scope.epIndex];
					var startTime = ep.cues[cueIndex].start_time;
					var endTime = ep.cues[cueIndex].end_time;
					audioElt.time(startTime);
					audioElt.addCue(endTime, $scope.playNext.bind($scope));
				}
				// otherwise, ...load more?
				else {
					audioElt.stop();
					alert('there are no more episodes to play');
					// TO DO: scope.epService.loadMore();
				}
			}

		}
	}
}



function clearAudioElementCues(decks) {
	for (var i = 0; i < decks.length; i++) {
		decks[i].clearCues();
	}
}