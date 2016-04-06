angular.module('myApp', [ 'ngRoute' ]).config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "views/home.html",
		name : "Home"
	}).when("/profile", {
		templateUrl : "views/profile.html",
		name : "Profil"
	}).when("/components", {
		templateUrl : "views/components.html",
		name : "Komponenten"
	}).otherwise({
		redirectTo : "/"
	});
});