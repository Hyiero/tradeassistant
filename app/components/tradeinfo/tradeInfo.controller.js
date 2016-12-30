/**
 * Created by Hyiero on 12/29/2016.
 */
export default function tradeInfoController(tradeInfoService){
    "use strict";
    let vm = this;
    vm.tradeInfo = {};
    vm.showTotalRiskPercentage = false;
    vm.showStopLoss = false;

    vm.$onInit = function(){
    };

    vm.calculateTradeInformation = function(){
        vm.tradeInfo.stocksPurchasable = Math.floor(tradeInfoService.calculateStocksPurchasable(vm.tradeInfo));
        console.log(vm.showStopLoss);
        if(vm.showStopLoss)
            vm.tradeInfo.totalRiskPercentage = tradeInfoService.calculateTotalRisk(vm.tradeInfo);

        console.log(vm.tradeInfo);
    };

    return vm;
}
