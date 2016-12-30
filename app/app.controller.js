/* @ngInject*/
export default function appController($state){
    "use strict";
    let vm = this;

    vm.$onInit = function(){
        $state.transitionTo('tradeEdit');
        console.log("Loading");
    };

    vm.name = "Trade Assistant";

    return vm;
}