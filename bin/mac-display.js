const program = require('commander')
const exec = require('../lib/status')

const display = {
  flags: {
    status: '-s, --status'
  },
  cmds: {
    status: 'system_profiler SPDisplaysDataType'
  }
}

for (let f in display.flags) {
  program.option(display.flags[f])
}

program.parse(process.argv)

if (program.status) exec(display.cmds.status)
else program.outputHelp()
