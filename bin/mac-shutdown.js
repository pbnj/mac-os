const program = require('commander')
const exec = require('../lib/status')

const shutdown = require('../package.json').macOS.shutdown

for (let flags in shutdown) {
  if (typeof shutdown[flags] === 'object') {
    const flag = shutdown[flags].flag;
    if (flag) program.option(flag)
  }
}

program.parse(process.argv)

if (program.force) exec(shutdown.force.cmd)
else {
  exec(shutdown.default.cmd)
  program.outputHelp();
}
