'use strict';

angular.module('queueCastApp')
  .service('CategoriesService', CategoriesService);

function CategoriesService() {
	this.categoreies = [];

	this.getCategories = function () {
		return this.categoreies;
	};
}