/**
 * Created by Hyiero on 12/9/2016.
 */
import angular from 'angular';
import router from 'angular-ui-router';
import ngResource from 'angular-resource';
import appController from './app.controller';
import appConfig from './app.config';
import appService from './app.service';


/** App Module
 * @module app
 */

export default angular.module('app',[router,ngResource])
    .factory(appService.name,appService)
    .controller(appController.name,appController)
    .config(appConfig)