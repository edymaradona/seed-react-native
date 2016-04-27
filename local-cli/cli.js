// TO-DO: add comment and license

var fs = require('fs');
var TerminalAdapter = require('yeoman-environment/lib/adapter.js');
var yeoman = require('yeoman-environment');
var path = require('path');

function init (projectDir, projectName){
  // create app structure
  var env = yeoman.createEnv();

  env.register(
    require.resolve(path.join(__dirname, 'generator')),
    'react:app'
  );
  var args = projectName;
  var generator = env.create('react:app', {args: args});
  generator.destinationRoot(projectDir);
  generator.run();
}

module.exports = {
  init:init
}
