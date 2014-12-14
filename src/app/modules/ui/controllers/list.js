'use strict';

/**
 * @ngInject
 */
function List($scope, Faker) {
  // ViewModel
  var vm = $scope.vm = this;

  vm.items = Faker.getItems();
}

module.exports = List;
