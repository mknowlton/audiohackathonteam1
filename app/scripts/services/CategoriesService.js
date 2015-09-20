'use strict';

angular.module('queueCastApp')
  .service('CategoriesService', CategoriesService);

//Names are categories come from Audiosearch except Motivation and Feel, text is what shows up in Categories  View
//Change names as needed, name will pull the playlist
function CategoriesService() {
	this.categoreies = [{'name': 'Education', 'text': 'Learn', 'image':'images/learn.svg'}, {'name': 'Comedy', 'text': 'Laugh', 'image':'images/laugh.svg'}, {'name':'Technology', 'text': 'See the Future', 'image':'images/seeTheFuture.svg'},{'name':'Motivation', 'text': 'Get Inspired', 'image':'images/getInspired.svg'}, {'name': 'Emotion', 'text':'Feel', 'image':'images/feel.svg'}];

	this.getCategories = function () {
		return this.categoreies;
	};

}