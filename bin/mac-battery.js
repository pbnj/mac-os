const commander = require('commander')
const exec = require('../lib/status')

commander.parse(process.argv)

const statusCmd = 'pmset -g batt'
exec(statusCmd)
