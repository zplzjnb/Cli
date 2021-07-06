#! /usr/bin/env node
const program = require('commander')
program
.version('0.0.1')
.option('-C, --chdir <path>', 'change the working directory')
.option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
.option('-T, --no-tests', 'ignore test hook')

program
.command('setup')
.description('run remote setup commands')
.action(function() {
  console.log('setup');
});

program
.command('exec <cmd>')
.description('run the given remote command')
.action(function(cmd) {
  console.log('exec "%s"', cmd);
});

program
.command('*')
.description('deploy the given env')
.action(function(env) {
  console.log('deploying "%s"', env);
});

console.log('process.argv',process.argv);

program.parse(process.argv);