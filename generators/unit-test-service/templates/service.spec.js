'use strict';

describe('<%= namespace %>', function() {

    describe('SVC: <%= name %>', function() {

        var svc;

        beforeEach(function () {

            module('<%= namespace %>');
            module(function ($provide) {
                $provide.value('<%= name %>', {
                    generateUUID: function() {
                        return (Math.random() * 9999999 | 0) + 1;
                    },
                    getBrowserLocaleSetting: function () {}
                });
            });

            inject(
                function (<%= name %>) {
                    svc = <%= name %>;
                }
            );

        });

        describe('Method: ', function () {

            beforeEach (function () {
            });

            it ('should', function () {
            });

        });

        describe('Service Mode', function () {

            it ('should exist', function () {
                expect(typeof svc).toEqual('object');
            });

        });

    });

});
