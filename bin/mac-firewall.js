const program = require('commander')
const exec = require('../lib/status')

// TODO: add & remove firewall rules
const firewall = {
  flags: {
    status: '-s, --status',
    enable: '-e, --enable',
    disable: '-d, --disable',
    list: '-l, --list'
  },
  cmds: {
    status: '/usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate',
    enable: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on',
    disable: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate off',
    list: '/usr/libexec/ApplicationFirewall/socketfilterfw --list'
  }
}

for (let f in firewall.flags) {
  program.option(firewall.flags[f])
}

program.parse(process.argv)

if (program.status) exec(firewall.cmds.status)
else if (program.enable) exec(firewall.cmds.enable)
else if (program.disable) exec(firewall.cmds.disable)
else if (program.list) exec(firewall.cmds.list)
else program.outputHelp()
