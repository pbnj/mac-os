const exec = require('child_process').exec
const red = require('./color').red
const green = require('./color').green

function execCmd (cmd) {
  exec(cmd, (err, stdout, stderr) => {
    if (err) red(`exec error: ${err}`)
    status(stdout, stderr)
  })
}

function status (stdout, stderr) {
  green(stdout)
  red(stderr)
}

module.exports = exports = execCmd
