var cmd = require('commander');
var chalk = require('chalk');
var processor = require('./processor');

cmd.version('0.0.1').usage('<keywords').parse(process.argv);

if (!cmd.args.length) {
  console.log(chalk.cyan.bold.underline('Enter something'));
}
else {
  console.log(chalk.cyan.bold.underline('What you entered : ' + cmd.args + ' and what you get : ' + processor.fizzOrBuzz(cmd.args)));
}

