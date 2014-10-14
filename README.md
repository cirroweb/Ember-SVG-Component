# Svg-component

This is a small Ember Cli project that includes an async SVG component. 

this code was developed via http://bit.ly/1yIfpsI

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)
* [Gulp] (https://github.com/slushjs/gulp-install)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Setup

* `ember new svg_component`
* `npm install --save-dev broccoli-sass`
* setup git stuff
* rename `app/styles/app.css` to `app/styles/app.sass`
* moved inizio styles into styles folder and import necessary files in `app.sass` 
* `npm install --save-dev gulp-install`
* moved svg icons into `app/assets/icons/svg_files/`
* added `gulpfile.js` to root
* run `gulp create-icon-sprite` to generate svg sprite sheet


## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* broccoli sass: https://github.com/joliss/broccoli-sass

