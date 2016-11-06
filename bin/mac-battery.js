const program = require('commander')
const exec = require('../lib/status')

const battery = require('../package.json').macOS.battery

for (let flags in battery) {
  if (typeof battery[flags] === 'object') program.option(battery[flags].flag)
}

program.parse(process.argv)

if (program.status) exec(battery.status.cmd)
else program.outputHelp()
