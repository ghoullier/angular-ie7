!function e(t,r,o){function n(l,u){if(!r[l]){if(!t[l]){var s="function"==typeof require&&require;if(!u&&s)return s(l,!0);if(i)return i(l,!0);var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}var c=r[l]={exports:{}};t[l][0].call(c.exports,function(e){var r=t[l][1][e];return n(r?r:e)},c,c.exports,e,t,r,o)}return r[l].exports}for(var i="function"==typeof require&&require,l=0;l<o.length;l++)n(o[l]);return n}({1:[function(e){"use strict";e("./modules/common/module"),e("./modules/data/module"),e("./modules/templates/module"),e("./modules/ui/module")},{"./modules/common/module":3,"./modules/data/module":5,"./modules/templates/module":7,"./modules/ui/module":11}],2:[function(e,t){"use strict";t.exports={logLevel:"warn"}},{}],3:[function(e,t){"use strict";t.exports=angular.module("angular-ie7.common",[]).factory("Logger",e("./services/logger"))},{"./services/logger":4}],4:[function(e,t){"use strict";function r(e){var t={};return n.forEach(function(r){t[r]=n.indexOf(r)>=i?e[r]||e.log:angular.noop}),t}var o=e("../../../config"),n=["log","trace","debug","info","warn","error"],i=n.indexOf(o.logLevel||"log");r.$inject=["$log"],t.exports=r},{"../../../config":2}],5:[function(e,t){"use strict";t.exports=angular.module("angular-ie7.data",["angular-ie7.common"]).factory("Faker",e("./services/faker"))},{"./services/faker":6}],6:[function(e,t){"use strict";function r(){function e(){for(var e=[],t=Math.ceil(10*Math.random()),r=0;t>r;++r)e.push({id:r,name:["data",r].join("--")});return e}var t={};return t.getItems=e,t}t.exports=r},{}],7:[function(e,t){"use strict";t.exports=angular.module("angular-ie7.templates",[]).run(["$templateCache",function(e){e.put("partials/views/index.html","<h1>AngularJS Devstack</h1><p>{{vm.welcomeMessage}}</p>"),e.put("partials/views/list.html",'<h1>List example</h1><ul><li data-ng-repeat="item in vm.items">{{item.id}} - {{item.name}}</li></ul>')}])},{}],8:[function(e,t){"use strict";function r(e,t){e.when("/index",{templateUrl:"partials/views/index.html",controller:"Index"}),e.when("/list",{templateUrl:"partials/views/list.html",controller:"List"}),e.otherwise({redirectTo:"/index"}),t.html5Mode(!1)}r.$inject=["$routeProvider","$locationProvider"],t.exports=r},{}],9:[function(e,t){"use strict";function r(e,t){t.debug("Index");var r=e.vm=this;r.welcomeMessage="Welcome message generated by AngularJS"}r.$inject=["$scope","Logger"],t.exports=r},{}],10:[function(e,t){"use strict";function r(e,t,r){t.debug("List");var o=e.vm=this;o.items=r.getItems()}r.$inject=["$scope","Logger","Faker"],t.exports=r},{}],11:[function(e,t){"use strict";t.exports=angular.module("angular-ie7.ui",["angular-ie7.common","angular-ie7.data","angular-ie7.templates"]).config(e("./config/route")).controller("Index",e("./controllers/index")).controller("List",e("./controllers/list"))},{"./config/route":8,"./controllers/index":9,"./controllers/list":10}]},{},[1]);