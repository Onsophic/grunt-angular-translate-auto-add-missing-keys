/*
 * grunt-angular-translate-auto-add-missing-keys
 * https://github.com/jeroenabrahams/angular-translate-auto-add-missing-keys
 *
 * Copyright (c) 2018 jeroen.abrahams
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var utils = require('../lib/utils');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('angular_translate_auto_add_missing_keys', 'This plugins searches through a base angular-translate file and add the missing keys into the other translation files', function() {
    // Merge task-specific and/or target-specific options with these defaults.
         var options = this.options({
           baseLang: 'en',
           placeholder: '$$placeholder',
           ext: 'json'
         });

         function warn(text) {
           // if options.outputFile ...

           if (!Array.isArray(text)) {
             text = [text];
           }

           text.forEach(function(t) {
             grunt.log.error(t);
           });

           return !options.fatal;
         }

         var baseFile = null;
         var otherFiles = [];

         this.filesSrc.forEach(function(file) {
           if (path.basename(file, '.' + options.ext) === options.baseLang) {
             baseFile = file;
           } else if (path.extname(file) === '.' + options.ext) {
             otherFiles.push(file);
           }
         });

        if (!baseFile || !grunt.file.exists(baseFile)) {
            return warn('Base translation file \'' + options.baseLang + '.' + options.ext + '\' not found.');
        }

        // find missing vars between the base and all langs

        var baseTranslation = utils.parseAndFlatten(baseFile);

        var hasErrors = false;

        otherFiles.forEach(function(file) {
            var lang = '\'' + path.basename(file, '.' + options.ext) + '\'';
            var translation = utils.parseAndFlatten(file);
            var newTranslation = JSON.parse(JSON.stringify(baseTranslation));

            for (var key in newTranslation) {
                if (key in translation) {
                    newTranslation[key] = translation[key];
                } else {
                    newTranslation[key] = options.placeholder;
                }
            }

            if (options.dest) {
                var fe =  'tmp/' + path.basename(file, '.' + options.ext) + '.' + options.ext;
                grunt.file.write(fe, JSON.stringify(newTranslation, null, 2));
            } else {
                grunt.file.write(file, JSON.stringify(newTranslation, null, 2));
            }
            grunt.log.write('succesfully updated translation:' + lang);

        });
  });

};
