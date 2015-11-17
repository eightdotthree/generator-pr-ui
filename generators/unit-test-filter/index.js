'use strict';

var yeoman = require('yeoman-generator');
var utils = require('../../lib/utils.js');
var config = require('../../lib/config.js');

var prUiGenerator = yeoman.generators.Base.extend({

    prompting: function () {

        var done = this.async();
        var testType = 'filter';

        var requestNameSpace = {
            type:       'list',
            name:       'namespace',
            message:    config.WHICH_FACET_ARE_YOU_IN,
            default:    config.FACETS[0],
            choices:    config.FACETS
        };

        // get the name of the directive, service, etc
        var requestName = {
            type:       'input',
            name:       'name',
            message:    'What is the name of your ' + testType + '?',
            default:    'prFilterName'
        };

        var questions = [
            requestNameSpace,
            requestName
        ];

        this.prompt(questions, function (answer) {

            this.namespace = answer.namespace;

            this.name = answer.name;
            this.templateName = utils._format_template_name(answer.name);

            done();

        }.bind(this));

    },

    writing: {

        spec: function () {
            this.template('filter.spec.js', config.PATHS.UNIT_TEST_FILTER + this.templateName + '.spec.js');
        }

    }

});

module.exports = prUiGenerator;