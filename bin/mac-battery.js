const program = require('commander')
const exec = require('../lib/status')

const battery = {
  flags: {
    status: '-s, --status'
  },
  cmds: {
    status: 'pmset -g batt'
  }
}

for (let f in battery.flags) {
  program.option(battery.flags[f])
}

program.parse(process.argv)

if (program.status) exec(battery.cmds.status)
else program.outputHelp()
