'use strict';

module.exports = angular
  .module('angular-ie7.ui', [
    'ui.router',
    'angular-ie7.common',
    'angular-ie7.data',
    'angular-ie7.templates'
  ])
  .config(require('./config/route'))
  .controller('Index', require('./controllers/index'))
  .controller('List', require('./controllers/list'))
;
