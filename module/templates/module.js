/**
 * <%= name %> Module
 * @namespace Modules
 */

(function() {
  'use strict';
<% if (!uirouter) { %>
  angular
    .module('<%= _.camelize(name) %>')
    .config(<%= _.camelize(name) %>Route);

  /*
   * @name <%= _.camelize(name) %>Route
   * @desc defined route for module <%= name %>
   * @param $routeProvider
   * @returns none
   * @memberOf Modules
   */
  function <%= _.camelize(name) %>Route($routeProvider) {

      /* Add New Routes Above */

  }
<% } %>
<% if (uirouter) { %>
  angular
    .module('<%= _.camelize(name) %>')
    .config(<%= _.camelize(name) %>Route);

  /*
   * @name <%= _.camelize(name) %>Route
   * @desc defined route for module <%= name %>
   * @param $stateProvider
   * @returns none
   * @memberOf Modules
   */
  function <%= _.camelize(name) %>Route($stateProvider) {

      /* Add New States Above */

  }
<% } %>
  angular
    .module('<%= _.camelize(name) %>', ['ui.bootstrap','ui.utils','<%= routerModuleName %>','ngAnimate']);

})();
