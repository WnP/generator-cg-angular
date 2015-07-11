/**
 * <%= ctrlname %> Controller
 * @namespace Controllers
 */

(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .controller('<%= ctrlname %>', <%= _.camelize(ctrlname) %>)

  /*
   * @name <%= _.camelize(ctrlname) %>
   * @desc
   * @param $scope
   * @returns none
   * @memberOf Controllers
   */
  function <%= _.camelize(ctrlname) %>($scope){

  };

})();
