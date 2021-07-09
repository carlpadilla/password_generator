const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const log = console.log;

const createPassword = require('./utils/createPassword');

program.version('1.0.0').description('Simple Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'Remove numbers')
  .option('-ns, --no-symbols', 'Remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated password

const generatedPassword = createPassword(length, numbers, symbols);

//Copy to clipbord
clipboardy.writeSync(generatedPassword);

// Output generated password

log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
log(chalk.red('Password copied to clipboard.'));
