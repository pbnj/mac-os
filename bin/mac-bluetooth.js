const program = require('commander')
const exec = require('../lib/status')

const bluetooth = require('../package.json').macOS.bluetooth

for (let flags in bluetooth) {
  if (typeof bluetooth[flags] === 'object') program.option(bluetooth[flags].flag)
}

program.parse(process.argv)

if (program.status) exec(bluetooth.status.cmd)
else if (program.enable) exec(bluetooth.enable.cmd)
else if (program.disable) exec(bluetooth.disable.cmd)
else program.outputHelp()
