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
function spinnerCtrl($timeout, $rootScope) {
    var vm = this;
    vm.isLoading = true;
    $rootScope.$on('changeStateStart', function () {
        vm.isLoading = true;
    });
    $rootScope.$on('changeStateFinish', function () {
        $timeout(function () {
            vm.isLoading = false;
        });
    });
}

angular.module('TestApp')
    .directive('spinner', function () {
        return {
            restrict: 'E',
            replace: false,
            controller: spinnerCtrl,
            controllerAs: 'spinner',
            templateUrl: '../html/components/spinner/spinner.tpl.html'
        }
    });
angular.module('TestApp').controller('homeCtrl', [function() {
    var vm = this;
    vm.homePageTitle = 'AAAAAAA HOME PAGE'
}]);