#!/usr/bin/env node

const program = require('commander');

program.version('1.0.0')
  .usage('<command>[项目名称]')
  .command('init <extensionId>')
  .description('init extension project')
  .action((extensionId) => {
    console.log(`init Extension Project "${extensionId}"`);
    // todo something you need
    require('./cli-init.js')
   });

   program.parse(process.argv);
