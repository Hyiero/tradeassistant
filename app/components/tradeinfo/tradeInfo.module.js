/**
 * Created by Hyiero on 12/29/2016.
 */

import uiRouter from 'angular-ui-router';
import controller from './tradeInfo.controller';
import service from './tradeInfo.service';
import config from './tradeInfo.config';


export default angular.module('tradeInfo',[uiRouter])
    .factory(service.name,service)
    .controller(controller)
    .config(config)
    .name;