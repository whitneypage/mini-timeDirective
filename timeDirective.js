var app = angular.module('timeApp');

app.directive('showTime', function() {

	return{
		restrict: 'E',
		template: '<div> The current time is {{time}} </div>',
		link : function(scope, ele, attr) {
			var currentTime = new Date();
			scope.time = currentTime.toString();

		}
	}


})