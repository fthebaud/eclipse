'use strict';

// retreiving the eclipse module
angular.module('eclipse')
  // registering a tile component
  .component('tileLayout', {
    templateUrl: 'app/tile-layout/tile-layout.template.html',
    controller: ['$log', function tileController($log) {
      const numberOfImages = 30;
      let tab = [];
      for(var i = 0; i < numberOfImages; i++){
        tab[i] = i;
      }
      $log.log(tab);
      this.imageIndexes = tab;
    }],
    controllerAs: 'tileController'
  });
