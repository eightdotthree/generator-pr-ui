'use strict';

describe('<%= namespace %>', function() {

    describe('DIR: <%= name %>', function() {

        var element, scope, isolated;

        beforeEach(function () {

            module('<%= namespace %>');
            module('scripts/directives/templates/<%= templateName %>.html');

            inject(function ($rootScope, $compile) {

                scope = $rootScope.$new();
                compileSvc = $compile;

                element = angular.element('<pr-<%= templateName %>></pr-<%= templateName %>>');
                element = $compile(element)(scope);

                scope.$digest();

                isolated = element.isolateScope();

            });

        });

        describe ('the directive', function () {

            it( 'has', function () {

            });

        });

    });

});
