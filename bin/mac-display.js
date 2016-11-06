const program = require('commander')
const exec = require('../lib/status')

program.parse(process.argv)

exec(`system_profiler SPDisplaysDataType`)
