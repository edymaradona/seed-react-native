#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var chalk = require('chalk');
var Spinner = require('cli-spinner').Spinner;

var CLI_MODULE_PATH = function() {
  return path.resolve(
    process.cwd(),
    'node_modules',
    'seed-react-native',
    'local-cli',
    'cli.js'
  );
};

var cli;
var cliPath = CLI_MODULE_PATH();
if (fs.existsSync(cliPath)) {
  cli = require(cliPath);
}

if (cli) {
  cli.run();
} else {
  var args = process.argv.slice(2);
  if (args.length === 0) {
    console.error(
      'You did not pass any commands, did you mean to run `seed-react-native init`?'
    );
    process.exit(1);
  }

  switch (args[0]) {
  case 'init':
    if (args[1]) {
      var verbose = process.argv.indexOf('--verbose') >= 0;
      init(args[1], verbose);
    } else {
      console.error(
        'Usage: seed-react-native init <ProjectName> [--verbose]'
      );
      process.exit(1);
    }
    break;
  default:
    console.error(
      'Command `%s` unrecognized. ',
      args[0]
    );
    process.exit(1);
    break;
  }
}

function validatePackageName(name) {
  if (!name.match(/^[$A-Z_][0-9A-Z_$]*$/i)) {
    console.error(
      '"%s" is not a valid name for a project. Please use a valid identifier ' +
        'name (alphanumeric).',
      name
    );
    process.exit(1);
  }

  if (name === 'React') {
    console.error(
      '"%s" is not a valid name for a project. Please do not use the ' +
        'reserved word "React".',
      name
    );
    process.exit(1);
  }
}

function init(name, verbose) {
  validatePackageName(name);
  var root = path.resolve(name);
  var projectName = path.basename(root);

  // install react-native
  console.log(chalk.green('Initiating a new project'));
  console.log(chalk.green('Grab yourself some popcorn this might take a while....🍿🍿🍿🍿'));
  var spinner = new Spinner('Installing React Native...');
  spinner.setSpinnerString('-|/-|\\');
  spinner.start();

  exec('react-native init '+name, function(e, stdout, stderr){
    if (e) {
      console.log(stdout);
      console.error(stderr);
      process.exit(1);
    }
    spinner.stop();

    process.chdir(root);
    // install cli file
    exec('npm install --save seed-react-native', function(e, stdout, stderr) {
      if (e) {
        console.log(stdout);
        console.error(stderr);
        process.exit(1);
      }

      console.log(chalk.green('/n Creating project structure'));
      var cli = require(CLI_MODULE_PATH());
      cli.init(root, projectName);

    });

  });

}
