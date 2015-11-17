'use strict';

describe('<%= namespace %>', function () {

    describe('FLTR: <%= name %>', function() {

        var fltr, log;

        beforeEach(function () {

            module('<%= namespace %>');

            inject(function($filter, $log) {
                fltr = $filter('<%= name %>');
                log = $log;
            });

        });

        it ('exists', function() {
            expect(fltr).not.toBeNull();
        });

        it ('should filter', function () {

        });

    });
});

