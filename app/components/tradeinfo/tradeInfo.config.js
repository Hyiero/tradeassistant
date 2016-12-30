/**
 * Created by Hyiero on 12/29/2016.
 */

import tradeInfoController from './tradeInfo.controller';

export default function tradeInfoConfig($stateProvider){
    "use strict";
    $stateProvider
        .state('tradeInfo',{
            parent: 'app',
            abstract: true,
            template: require('./tradeInfo.html')
        })
        .state('tradeEdit',{
            parent: 'tradeInfo',
            url: '',
            views: {
                '':{
                    template: require('./tradeInfo.edit.html'),
                    controller: tradeInfoController,
                    controllerAs: 'tradeInfoCtrl'
                }
            }
        })

}