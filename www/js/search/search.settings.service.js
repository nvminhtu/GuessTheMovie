(function() {
	'use strict';

	angular
		.module('app.core')
		.service('searchSettingsService', searchSettingsService);

	searchSettingsService.$inject = ['$window'];

	function searchSettingsService($window) {
		var vm = this;

		var settingsService = {
			get : get,
			set : set
		};

		return settingsService;

		////////////////

		function set(settings) {
			$window.localStorage.setItem('movieSearchSettings', JSON.stringify(settings));
		};

		function get() {
			var settings = JSON.parse($window.localStorage.getItem('movieSearchSettings'));

			if ( settings === null ) {
				settings = {};
			} 

			return settings;
		};
	}
})();