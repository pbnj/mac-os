const chalk = require('chalk')

const red = (msg) => console.log(chalk.red(msg))
const green = (msg) => console.log(chalk.green(msg))
const white = (msg) => console.log(msg)

module.exports.red = red
module.exports.green = green
module.exports.white = white
