'use strict';

//define the eclipse module
angular.module('eclipse', []);

// retreiving the eclipse module
angular.module('eclipse')
  // creating a controller for the layout
  // TODO : this instead of scope
  .controller('LayoutController', ['$scope', function LayoutController($scope){
      $scope.getArray = function () {
        return new Array(30);
      };
    }
  ]);
