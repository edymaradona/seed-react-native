# seed-react-native
A generator for ready-to-implement react-native project. After initiate a new project all required depedencies will also download and automatically config.
- React Native
- Redux
- Yeoman

## Dependencies
- [NodeJs](http://nodejs.org/) : I suggest you install this via [Node Version Manager NVM](https://github.com/creationix/nvm)
 
    This project depends on Node versions greater than v4, use nvm to install and setup open up the command line and run
    
    $ nvm install 4.x.x

    Next simply switch to node v4:
    
    nvm use 4.x.x

    This will change your current terminal session to use 4.0.0. If you want to use it permanently run:
    
    `$ nvm alias default 4.x.x`

 - NPM - NPM may or may not have been installed with Node. Try:

    $ npm

	If you get a "not found" error, run this:
	
    $ curl -L https://npmjs.org/install.sh | sh

  - React Native
## Getting Started Instructions

To create a new seed-react-project, first, install seed-react-native globally in order to initiate a new project anywhere in the system (you may need to use Admin account to do this)

    $ npm install -g seed-react-native

After that, CD into your target folder and run init command

    $ seed-react-native init <Project Name>

seed-react-native will first initiate a new react-native project based on your given name and then scafold your project. This process may take a bit of time.

After all done, the project folder will be created based on the given project name.

To start an App, CD into the project folder and run

    $ 


