const program = require('commander')
const exec = require('../lib/status')
// TODO: add & remove firewall rules
const firewall = require('../package.json').macOS.firewall

for (let flags in firewall) {
  if (typeof firewall[flags] === 'object') program.option(firewall[flags].flag)
}

program.parse(process.argv)

if (program.status) exec(firewall.status.cmd)
else if (program.enable) exec(firewall.enable.cmd)
else if (program.disable) exec(firewall.disable.cmd)
else if (program.list) exec(firewall.list.cmd)
else program.outputHelp()
