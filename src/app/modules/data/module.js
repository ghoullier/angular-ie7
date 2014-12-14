'use strict';

module.exports = angular
  .module('angular-ie7.data', [
    'angular-ie7.common'
  ])
  .factory('Faker', require('./services/faker'))
;
