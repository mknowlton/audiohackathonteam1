'use strict';

angular.module('queueCastApp')
  .factory('APIPortalFactory', APIPortalFactory);

 function APIPortalFactory () {
 	var factory = {};

 	factory.initWithCategories = function(categories) {
 		//assumes categories are an array of objects
 		// similar to the one in CategoryService
 		_.pluck(categories, 'name');

 		$http('get', URL)
 	};

 	return factory;
 }