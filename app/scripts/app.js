'use strict';

/**
 * @ngdoc overview
 * @name audiohackathonteam1App
 * @description
 * # audiohackathonteam1App
 *
 * Main module of the application.
 */
angular
  .module('queueCastApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/categories', {
        templateUrl: 'views/categories.tpl.html',
        controller: 'CategoryCtrl',
        controllerAs: 'catCtrl'
      })
      .when('/trailers', {
        templateUrl: 'views/trailers.tpl.html',
        controller: 'TrailerSwipeCtrl',
        controllerAs: 'tsCtrl'
      })
      .when('/queue',{
        templateUrl: 'views/queue.tpl.html',
        controller: 'QueueCtrl',
        controllerAs: 'queueCtrl'
      })
      .otherwise({
        redirectTo: '/categories'
      });
  });
