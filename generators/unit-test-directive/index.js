'use strict';

var yeoman = require('yeoman-generator');
var utils = require('../../lib/utils.js');
var config = require('../../lib/config.js');

var prUiGenerator = yeoman.generators.Base.extend({

    prompting: function () {

        var done = this.async();
        var testType = 'directive';

        var requestNameSpace = {
            type:       'list',
            name:       'namespace',
            message:    'Which facet are you in?',
            default:    'pr.infra',
            choices:    [
                'pr.infra',
                'pr.org',
                'pr.patient'
            ]
        };

        // get the name of the directive, service, etc
        var requestName = {
            type:       'input',
            name:       'name',
            message:    'What is the name of your ' + testType + '?',
            default:    'prDirectiveName'
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
            this.template('directive.spec.js', config.PATHS.UNIT_TEST_DIRECTIVE + this.templateName + '.spec.js');
        }

    }

});

module.exports = prUiGenerator;