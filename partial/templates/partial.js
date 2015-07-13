/**
 * <%= ctrlname %> Controller
 * @namespace Controllers
 */

(function() {
  'use strict';

  /*
   * @name <%= _.camelize(ctrlname) %>
   * @desc
   * @param $scope
   * @returns none
   * @memberOf Controllers
   */
  function <%= _.camelize(ctrlname) %>($scope){

  }

  angular
    .module('<%= appname %>')
    .controller('<%= ctrlname %>', <%= _.camelize(ctrlname) %>);

})();
