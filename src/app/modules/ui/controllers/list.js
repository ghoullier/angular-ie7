'use strict';

/**
 * @ngInject
 */
function List($scope) {
  // ViewModel
  var vm = $scope.vm = this;

  vm.items = [];
}

module.exports = List;
