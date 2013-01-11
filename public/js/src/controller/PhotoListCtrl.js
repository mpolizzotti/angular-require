define(
	[
		'app',
		'jquery',
		'underscore',
		'angular',
		'debug',
		'resource/Photo'
	],
	function (app, $, _, angular, debug) {
		'use strict';

		var controller = app.gallery.controller(
			'PhotoListCtrl',
			[
				'$scope',
				'$http',
				'Photo',
				function ($scope, $http, Photo) {
					// Collection of photos.
					$scope.photos = [];

					// Headlines.
					$scope.photoHeadline = 'List of Photos';

					// Default order.
					$scope.orderProp = 'name';

					// Request collection of photos.
					Photo.getPhotos(
						function (data, status, headers, config) {
							$scope.photos = data;
						},
						function (data, status, headers, config) {
							$scope.photos = [];
						}
					);
				}
			]
		);

		return controller;
	}
);