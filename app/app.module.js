/**
 * Created by Hyiero on 12/9/2016.
 */
import angular from 'angular';
import router from 'angular-ui-router';
import ngResource from 'angular-resource';
import tradeInfoModule from './components/tradeinfo/tradeInfo.module';
import appController from './app.controller';
import appConfig from './app.config';


export default angular.module('app',[router,ngResource,tradeInfoModule])
    .controller(appController.name,appController)
    .config(appConfig)
    .name