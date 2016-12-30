/**
 * Created by Hyiero on 12/9/2016.
 */
/* @ngInject */
export default function appService($resource){
    "use strict";

    let resource = $resource("/api/testResource/:id",{id: "@id"});

    return resource;
}