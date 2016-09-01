'use strict';

// retreiving the eclipse module
angular.module('eclipse')
  // registering a tile component
  .component('tile', {
    templateUrl: 'app/tile/tile.template.html',
    controller: function tileController() {
    },
    controllerAs: 'tileController'
  });
