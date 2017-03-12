---
currentMenu: home
title: Treetop Documenation
version: 8.x-1.x
---
# Treetop Theme

An [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) and [Pattern Lab](http://patternlab.io) friendly starting point for new Drupal 8 themes. The theme is built to be used with Pattern Lab.

## Installing development dependencies

Prerequisites: [npm](https://nodejs.org/) installed.

In the Treetop theme root directory run:

```sh
npm install
```

## Integrating with Drupal

###Prerequisites

Install and enable the [Component Libraries module](https://www.drupal.org/project/components).

No configuration is needed, the settings are included in the [treetop.info.yml](https://github.com/jasonrsavino/treetop/blob/master/treetop.info.yml) file.

## Integrating with Pattern Lab

###Prerequisites

[Composer](https://getcomposer.org/) installed.

###First Time Install

1. In the Treetop theme root directory run: `git clone https://github.com/pattern-lab/edition-php-drupal-standard pattern-lab`
1. Then `cd pattern-lab` directory and run: `composer install`. If asked about replacing files, do it.
1. In the file `pattern-lab/config/config.yml` change `sourceDir` and `twigAutoescape`:

   ```yml
   sourceDir: ../components
   twigAutoescape: false
   ```
1. While still in the `pattern-lab` directory run: `php core/console --generate`


## Using the theme

Generally you will be running the Pattern Lab on your local environment during development. The theme has been built using [Grunt](http://gruntjs.com) tasks to automate some of the process involved in working with Pattern Lab.

 * To generate the Pattern Lab files
    `grunt pl:generate`
 * Run the Pattern Lab server and watch for changes
    `grunt pl:server`


# Contributing to Treetop
If you'd like to contribute to Treetop, please do so! There is always a lot of ground to cover and something for your wheelhouse.

No pull request is too small. Check out any [up for grabs issues](https://github.com/jasonrsavino/treetop/labels/help%20wanted%20-%20up%20for%20grabs) as a starting point.

## Guidelines
1. Please keep your pull requests concise and limited to **ONE** change at a time. This makes reviewing and testing so much easier.
2. _ALWAYS_ submit pull requests against the [dev branch](https://github.com/jasonrsavino/treetop/tree/dev).

##Coding style
Two files combine within the project to define and maintain our coding style.

* The `.editorconfig` controls spaces / tabs within supported editors. Check out their [site](http://editorconfig.org/).
* The `.eslintrc` defines our javascript standards. Some editors will evaluate this real-time - otherwise it's run using `grunt|gulp build`
