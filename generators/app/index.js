'use strict';

var yeoman = require('yeoman-generator');
var utils = require('../../lib/utils.js');
var config = require('../../lib/config.js');

var prUiGenerator = yeoman.generators.Base.extend({

    configuring: function () {

        this.options.env.testViewPath = 'test/app/test-pages/';

    }

});

module.exports = prUiGenerator;