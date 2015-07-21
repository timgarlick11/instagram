var app = angular.module('instagramApp', ['ngRoute'])

app.config(function($routeProvider) {
  

  //router hereapp.config(function($routeProvider ) {
// $httpProvider.defaults.headers.common('Access-Control-Allow-Headers') = *;
// $httpProvider.interceptors.push('httpRequestInterceptor')

$routeProvider.when('/', {
	
	templateUrl:'js/main/mainTmpl.html',
	controller: 'mainCtrl'

}).when('/about/', {
	
	templateUrl:'js/about/aboutTmpl.html',
	controller: 'aboutCtrl'

	

}).otherwise({

	redirectTo:'/'
})

});