var cmd = require('commander');
var chalk = require('chalk');

cmd.version('0.0.1').usage('<keywords').parse(process.argv);

if (!cmd.args.length) {
  console.log(chalk.cyan.bold.underline('Enter something'));
}
else {
  console.log(chalk.cyan.bold.underline('Here you go! you entered ', cmd.args));
}

