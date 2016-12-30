/* @ngInject*/
export default function appController(appService){
    "use strict";
    let vm = this;

    vm.name = "Welcome to your sample Angular Webpack Seed Project. This is awesome";
    vm.test = '';

    /**
     * this is makeGetCall description
     */
    vm.makeGetCall = function(){
        appService.get({id: 1},onSuccess,onFail);
    };

    /**
     * Callback for our get call.
     * @callback
     */
    function onSuccess(data){
        console.log("Call Succeeded");
        vm.test = 'Success';
        console.log(data);
    }

    function onFail(){
        console.log("Call Failed");
        vm.test = 'Fail';
    }

    return vm;
}