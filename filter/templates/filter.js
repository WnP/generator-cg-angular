/**
 * <%= name %> Filter
 * @namespace Filters
 */

(function() {
  'use strict';

  /*
   * @name <%= _.camelize(name) %>
   * @desc
   * @param none
   * @returns filter function
   * @memberOf Filters
   */
  function <%= _.camelize(name) %>() {
    return function(input, arg) {
      return 'output';
    };
  }

  angular
    .module('<%= appname %>')
    .filter('<%= _.camelize(name) %>', <%= _.camelize(name) %>);

})();
