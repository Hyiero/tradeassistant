/**
 * Created by Hyiero on 12/10/2016.
 */

import './app.module';

let controller;
let service, $http;


describe('AppModule',function(){
    "use strict";

    beforeEach(function(){
        angular.mock.module('app')
    });

    describe('App Controller Spec',function(){

        beforeEach(inject(function(_$controller_,_appService_,_$httpBackend_){
            service = _appService_;
            $http = _$httpBackend_;
            controller = _$controller_('appController',{
                'appService': service
            });
        }));

        it('should test something',function(){
            expect(1).toBe(1);
        });

        it('should make a get call upon calling makeGetCall',function(){
            //Arrange
            spyOn(service,'get');
            //Act
            controller.makeGetCall();

            //Expect
            expect(service.get).toHaveBeenCalled();
        });

        it('should call the success callback function on a successful call',function(){
            //Arrange
            let getRequest = $http.expectGET('/api/testResource/1').respond(200,'');

            //Act
            controller.makeGetCall();
            $http.flush();
            //Assert
            expect(controller.test).toBe('Success');
        })

        it('should call the success callback function on a successful call',function(){
            //Arrange
            let getRequest = $http.expectGET('/api/testResource/1').respond(400,'');

            //Act
            controller.makeGetCall();
            $http.flush();
            //Assert
            expect(controller.test).toBe('Fail');
        })
    })
});