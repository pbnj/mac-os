const program = require('commander')
const exec = require('../lib/status')

// TODO: add & remove
const options = {
  status: '-s, --status',
  enable: '-e, --enable',
  disable: '-d, --disable',
  list: '-l, --list'
}

for (let opt in options) {
  program.option(options[opt])
}
program.parse(process.argv)

// TODO: add & remove
const commands = {
  status: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate',
  enable: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on',
  disable: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate off',
  list: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --list'
}

if (program.status) exec(commands.status)
else if (program.enable) exec(commands.enable)
else if (program.disable) exec(commands.disable)
else if (program.list) exec(commands.list)
else program.outputHelp()
