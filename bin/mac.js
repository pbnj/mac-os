#! /usr/bin/env node

const commander = require('commander')
const pkgJson = require('../package.json')

const availableCommands = {
  battery: 'Battery Info',
  bluetooth: 'Bluetooth Info',
  display: 'Display Info',
  firewall: 'Firewall Info'
}

commander.version(pkgJson.version)

for (let cmd in availableCommands) {
  commander.command(cmd, availableCommands[cmd])
}

commander.parse(process.argv)
