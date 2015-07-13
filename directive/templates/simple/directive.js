/**
 * <%= name %> Directive
 * @namespace Directives
 */

(function() {
  'use strict';

  /*
   * @name <%= _.camelize(name) %>
   * @desc
   * @param none
   * @returns directive object
   * @memberOf Directives
   */
  function <%= _.camelize(name) %>() {
    return {
      restrict: 'EA',
      link: function(scope, element, attrs, fn) {

      }
    };
  }

  angular
    .module('<%= appname %>')
    .directive('<%= _.camelize(name) %>', <%= _.camelize(name) %>);

})();
