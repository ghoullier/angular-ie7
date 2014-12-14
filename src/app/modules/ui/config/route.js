'use strict';

/**
 * @ngInject
 */
function RoutingConfig($routeProvider, $locationProvider) {

  $routeProvider.when('/index', {
    templateUrl: 'partials/views/index.html',
    controller: 'Index'
  });

  $routeProvider.when('/list', {
    templateUrl: 'partials/views/list.html',
    controller: 'List'
  });

  $routeProvider.when('/welcome', {
    templateUrl: 'partials/views/welcome.html',
    controller: 'Welcome'
  });

  $routeProvider.otherwise({
    redirectTo: '/index'
  });

  $locationProvider.html5Mode(false);
}
module.exports = RoutingConfig;
