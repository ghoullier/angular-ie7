'use strict';

/**
 * @ngInject
 */
function Welcome($scope) {
  // ViewModel
  var vm = $scope.vm = this;

  vm.appVersion = '1.0.0@ie7';
}

module.exports = Welcome;
