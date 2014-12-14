'use strict';

/**
 * @ngInject
 */
function List($scope, Logger, Faker) {
  Logger.debug('List');
  // ViewModel
  var vm = $scope.vm = this;

  vm.items = Faker.getItems();
}

module.exports = List;
