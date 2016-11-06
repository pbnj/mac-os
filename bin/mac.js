#! /usr/bin/env node

const program = require('commander')
const pkgJson = require('../package.json')

const availableCommands = {
  battery: 'Battery Info',
  bluetooth: 'Bluetooth Info',
  display: 'Display Info',
  firewall: 'Firewall Info'
}

program.version(pkgJson.version)

for (let cmd in availableCommands) {
  program.command(cmd, availableCommands[cmd])
}

program.parse(process.argv)
