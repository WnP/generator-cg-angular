/**
 * <%= name %> Factory
 * @namespace Factories
 */

(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .factory('<%= _.camelize(name) %>', <%= _.camelize(name) %>)

  /*
   * @name <%= _.camelize(ctrlname) %>
   * @desc
   * @param none
   * @returns factory object
   * @memberOf Factories
   */
  function <%= _.camelize(name) %>() {

    var <%= _.camelize(name) %> = {};

    return <%= _.camelize(name) %>;
  };

})();
