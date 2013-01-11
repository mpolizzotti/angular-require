define(
	[
		'app',
		'debug',
		'angular',
		'controller/PhotoListCtrl',
		'controller/PhotoDetailCtrl'
	],
	function (app) {
		'use strict';

		var router = app.gallery.config(
			[
				'$routeProvider',
				'$locationProvider',
				function ($routeProvider, $locationProvider) {
					//$locationProvider.html5Mode(true);
					$routeProvider
						.when('/photos', {
							templateUrl: 'template/photo-list.html',
							controller: 'PhotoListCtrl'
						})
						.when('/photos/:photoId', {
							templateUrl: 'template/photo-detail.html',
							controller: 'PhotoDetailCtrl'
						})
						.otherwise({
							redirectTo: '/photos'
						});
				}
			]);

		return router;
	}
);