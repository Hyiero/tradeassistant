/**
 * Created by Hyiero on 12/29/2016.
 */
export default function tradeInfoService(){
    "use strict";
    let service = {};

    service.calculateStocksPurchasable = function(tradeInfo){
        return ((tradeInfo.capital/tradeInfo.stockPrice) * (tradeInfo.capitalRiskPercentage/100));
    };

    service.calculateTotalRisk = function(tradeInfo){
        return (((tradeInfo.stockPrice - tradeInfo.stopLossPrice) * tradeInfo.stocksPurchasable) / tradeInfo.capital) * 100;
    };

    return service;
}