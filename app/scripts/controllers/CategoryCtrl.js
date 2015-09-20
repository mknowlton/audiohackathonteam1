'use strict';

angular.module('queueCastApp')
  .controller('CategoryCtrl', ['$scope','CategoriesService', function ($scope, CategoriesService) {
  	this.categories= CategoriesService.getCategories()
  	
  }]);