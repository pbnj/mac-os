const program = require('commander')
const exec = require('../lib/status')
// 1. import configuration
const display = require('../package.json').macOS.display

// 2. setup each flag dynamically
for (let flags in display) {
  if (typeof display[flags] === 'object') program.option(display[flags].flag)
}

program.parse(process.argv)

// 3. execute each flag manually
if (program.status) exec(display.status.cmd)
else program.outputHelp()
