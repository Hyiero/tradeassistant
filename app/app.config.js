/**
 * Created by Hyiero on 12/9/2016.
 */

import appTemplate from './app.html';
import appController from './app.controller';

/* @ngInject */
export default function appConfig($stateProvider){
    "use strict";

    $stateProvider
        .state('app',{
            url: '',
            views: {
                '':{
                    template: appTemplate,
                    controller: appController,
                    controllerAs: 'appCtrl'
                }
            }
        });
}