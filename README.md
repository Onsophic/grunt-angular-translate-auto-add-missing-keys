# grunt-angular-translate-auto-add-missing-keys

> This plugins searches through a base angular-translate file and add the missing keys into the other translation files

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-angular-translate-auto-add-missing-keys --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-angular-translate-auto-add-missing-keys');
```

## The "angular_translate_auto_add_missing_keys" task

### Overview
In your project's Gruntfile, add a section named `angular_translate_auto_add_missing_keys` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  angular_translate_auto_add_missing_keys: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.baseLang
Type: `String`
Default value: `'en'`

The default language used to check the other language files.

#### dest
Type: `String`
Default value: `'null'`

This is the destination where the updated languages files will be added, when there is no destitation, the old files will be overwritten.

#### ext
Type: `String`
Default value: `'json'`

The extension of the translation file

#### options.placeholder
Type: `String`
Default value: `'$$placeholder'`

This value will be filled when the key from the base language is not present in the other checked language.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  angular_translate_auto_add_missing_keys: {
      app: {
        options: {
          baseLang: 'base',
          dest: 'tmp/fixtures'
        },
        src: 'test/fixtures/*.json'
      },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
