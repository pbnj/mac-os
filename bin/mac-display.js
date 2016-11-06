const commander = require('commander')
const exec = require('../lib/status')

commander.parse(process.argv)

exec(`system_profiler SPDisplaysDataType`)
