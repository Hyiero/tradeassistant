/**
 * Created by Hyiero on 12/9/2016.
 */

import appController from './app.controller';

/* @ngInject */
export default function appConfig($stateProvider,$urlRouterProvider){
    "use strict";

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('app',{
            url: '/home',
            views: {
                '':{
                    template: require('./app.html'),
                    controller: appController,
                    controllerAs: 'appCtrl'
                }
            }
        });
}