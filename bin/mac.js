#! /usr/bin/env node

const program = require('commander')
const pkgJson = require('../package.json')

const macOS = pkgJson.macOS

program.version(pkgJson.version)

for (let cmd in macOS) {
  program.command(cmd, macOS[cmd].desc)
}

program.parse(process.argv)
