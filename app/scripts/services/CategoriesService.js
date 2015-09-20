'use strict';

angular.module('queueCastApp')
  .service('CategoriesService', CategoriesService);

//Names are categories come from Audiosearch except Motivation and Feel, text is what shows up in Categories  View
//Change names as needed, name will pull the playlist
function CategoriesService() {
	this.categoreies = [{'name': 'Education', 'text': 'Learn', 'image':'http://uxrepo.com/static/icon-sets/elusive/svg/headphones.svg'}, {'name': 'Comedy', 'text': 'Laugh', 'image':'http://uxrepo.com/static/icon-sets/elusive/svg/headphones.svg'}, {'name':'Technology', 'text': 'See the Future', 'image':'http://uxrepo.com/static/icon-sets/elusive/svg/headphones.svg'},{'name':'Motivation', 'text': 'Get Inspired', 'image':'http://uxrepo.com/static/icon-sets/elusive/svg/headphones.svg'}, {'name': 'Emotion', 'text':'Feel', 'image':'http://uxrepo.com/static/icon-sets/elusive/svg/headphones.svg'}];

	this.getCategories = function () {
		return this.categoreies;
	};

}