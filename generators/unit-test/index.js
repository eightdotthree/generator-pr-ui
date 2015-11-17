'use strict';

var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var utils = require('../../lib/utils.js');
var config = require('../../lib/config.js');

var prUiGenerator = yeoman.generators.Base.extend({

    prompting: function () {

        this.log(yosay(
            'Oh Hai! So you want to write some tests eh?'
        ));

        // request what type of test is required
        var requestType = {
            type:       'list',
            name:       'type',
            message:    'What are you testing?',
            default:    'directive',
            choices: [
                'directive',
                'service',
                'filter'
            ]
        };

        var questions = [
            requestType
        ];

        this.prompt(questions, function (answer) {

            switch (answer.type) {

                case 'directive' : {
                    this.composeWith('pr-ui:unit-test-directive');
                    break;
                }

                case 'service' : {
                    this.composeWith('pr-ui:unit-test-service');
                    break;
                }

                case 'filter' : {
                    this.composeWith('pr-ui:unit-test-filter');
                    break;
                }

                default : {
                    this.log(yosay(
                        'You need to choose a test type!'
                    ));
                }

            }

        }.bind(this));

    }

});

module.exports = prUiGenerator;