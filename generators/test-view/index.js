'use strict';

var yeoman = require('yeoman-generator');
var utils = require('../../lib/utils.js');
var config = require('../../lib/config.js');

var prUiGenerator = yeoman.generators.Base.extend({

    initializing: function () {

        var done = this.async();
        var prompts = [{
            type: 'input',
            name: 'name',
            message: 'View name',
            default: this.appname
        }];

        this.prompt(prompts, function (props) {

            this.name = utils._format_input(props.name);
            done();

        }.bind(this));

    },

    writing: {

        view: function () {
            this.template('test-view.html', config.PATHS.TEST_VIEW + this.name + '.html');
        },

        path: function () {
            console.log('add the path to the app');
        }

    }

});

module.exports = prUiGenerator;