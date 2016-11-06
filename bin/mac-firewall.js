const commander = require('commander')
const exec = require('../lib/status')

// TODO: add & remove
const options = {
  status: '-s, --status',
  enable: '-e, --enable',
  disable: '-d, --disable',
  list: '-l, --list'
}

for (let opt in options) {
  commander.option(options[opt])
}
commander.parse(process.argv)

// TODO: add & remove
const commands = {
  status: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate',
  enable: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on',
  disable: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate off',
  list: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --list'
}

if (commander.status) exec(commands.status)
else if (commander.enable) exec(commands.enable)
else if (commander.disable) exec(commands.disable)
else if (commander.list) exec(commands.list)
else commander.outputHelp()