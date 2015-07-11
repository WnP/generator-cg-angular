/**
 * <%= name %> Directive
 * @namespace Directives
 */

(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .directive('<%= _.camelize(name) %>', <%= _.camelize(name) %>)

  /*
   * @name <%= _.camelize(name) %>
   * @desc
   * @param none
   * @returns directive object
   * @memberOf Directives
   */
  function() {
    return {
      restrict: 'EA',
      replace: true,
      scope: {

      },
      templateUrl: '<%= htmlPath %>',
      link: function(scope, element, attrs, fn) {

      }
    };
  };

})();
