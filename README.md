# Contao Boilerplate Setup with basic gulp and bower files

This repository contains a starting point to theme development with [Contao](https://github.com/contao/core). Tools like less, bower and gulp make it easier for you to get your assets under control while maintaining a convenient workflow.

## Installation

1. Install [node.js and npm](http://nodejs.org/)
2. Install [Bower](http://bower.io) (make sure to install Bower globally via the `-g` flag)
3. Clone this repository: `git clone https://github.com/westwerk-ac/contao-gulp-boilerplate.git`
4. Install bower dependencies (bower.json): `bower install`
5. Install node modules (package.json): `npm install`

## Workflow

Runnning `gulp` will start the less compiler, autoprefixer, minify the css and put the rendered css back into the theme folder. The bootstrap and font-awesome fonts will be copied into the theme folder for easier access in your less files. Note that `gulp` will only run this once and then exit.

Running `gulp dev` will start watching your files for changes and triggers the live reload. It will also **not** minify and concatenate css files.

### Additional Bower assets

Install new JS/CSS assets with `bower search` and `bower install`. To save these as dependencies, use the `-D` or `-S` flags (for more information, see the [Bower documentation](http://bower.io/docs/api/#install)). 

## Structure

`/files/theme/less/main.less`

Includes the bootstrap.less and is the right place for all your cool custom stuff

`/files/theme/less/partials/*`

Home for your cool custom less stuff

`/files/theme/less/bootstrap.less`

Imports the bootstra core files loaded throw bower but includes an own variables.less file from partials/

`/files/theme/css/`

Rendered css files

`/files/theme/fonts/`

(web)fonts

`/files/theme/img/`

Place for your images you use in your css file

