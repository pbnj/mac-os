const program = require('commander')
const exec = require('../lib/status')

program.parse(process.argv)

const statusCmd = 'pmset -g batt'
exec(statusCmd)
