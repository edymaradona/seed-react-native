var yeoman = require('yeoman-generator');
var fs = require('fs');
var _ = require('lodash');
var chalk = require('chalk');

function copy(src, dest, prop) {
  this.fs.copyTpl(
    this.templatePath(src),
    this.destinationPath(dest),
    this.props
  );
}

module.exports = yeoman.Base.extend({
	initializing() {
    this.copy = copy.bind(this);
    this.props = {
      projectName : arguments[0],
      appName : arguments[0][0].toUpperCase() + arguments[0].slice(1)
    };
  },

  writing: function () {
    this.conflicter.force = this.options.force;
    
    // revised react-native file
    this.copy('index.android.js', 'index.android.js');
    this.copy('index.ios.js', 'index.ios.js');
    this.copy('template_files/setup.js', 'app/setup.js');
    this.copy('template_files/app.js', 'app/'+this.props.appName+'.js');

    // coppy new project structure
    this.fs.copy(
      this.templatePath('app/**'),
      this.destinationPath('app')
    );
  },

  install: function () {
    this.log("Install required npm packages...")
    this.npmInstall(['redux'], {'--save': true});
    this.npmInstall(['react-redux'], {'--save': true});
    this.npmInstall(['redux-thunk'], {'--save': true});
    this.npmInstall(['redux-logger'], {'save': true});
    this.npmInstall(['redux-persist'], {'save': true});
  },
  end: function() {
    this.log(chalk.green.bold('Project successfully created'));

    var projectPath = this.destinationRoot();
    this.log(chalk.white.bold('To run your app on iOS:'));
    this.log(chalk.white('   cd ' + this.destinationRoot()));
    this.log(chalk.white('   react-native run-ios'));

    this.log(chalk.white.bold('To run your app on Android:'));
    this.log(chalk.white('   Have an Android emulator running (quickest way to get started), or a device connected'));
    this.log(chalk.white('   cd ' + projectPath));
    this.log(chalk.white('   react-native run-android'));
  }

});
