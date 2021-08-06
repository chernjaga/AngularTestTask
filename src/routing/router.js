angular.module('TestApp', ['ui.router', 'ngAnimate'])
.config(function (
    $locationProvider,
    $stateProvider,
    $urlRouterProvider
) {
    var homeState = {
        name: 'home',
        url: '/home',
        controller: 'homeCtrl',
        // bindToController: {
        //     homePageTitle: '<'
        // },
        controllerAs: 'home',
        templateUrl: '../html/routing/routes/home/home.tpl.html',
    };

    $stateProvider.state(homeState);
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
});