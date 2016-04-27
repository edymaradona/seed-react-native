var yeoman = require('yeoman-generator');
var fs = require('fs');
var _ = require('lodash');

function copy(src, dest) {
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
      name : arguments[0]
    };
  },

  writing: function () {
    // revised react-native file
    this.copy('index.android.js', 'index.android.js');
    this.copy('index.ios.js', 'index.ios.js');
    this.copy('template_files/setup.js', 'app/setup.js');
    this.copy('template_files/app.js', 'app/'+this.props.name+'.js');

    // coppy new project structure
    this.fs.copy(
      this.templatePath('app/**'),
      this.destinationPath('app')
    );
  },

  install: function () {
  }

});
