const program = require('commander')
const exec = require('../lib/status')

const options = {
  status: '-s, --status',
  enable: '-e, --enable',
  disable: '-d, --disable'
}

for (let opt in options) {
  program.option(options[opt])
}
program.parse(process.argv)

const commands = {
  status: `defaults read /Library/Preferences/com.apple.Bluetooth ControllerPowerState | awk '{ if($1 != 0) {print "Bluetooth: ON"} else { print "Bluetooth: OFF" }  }'`,
  enable: `sudo defaults write /Library/Preferences/com.apple.Bluetooth ControllerPowerState -int 1 && sudo killall -HUP blued`,
  disable: `sudo defaults write /Library/Preferences/com.apple.Bluetooth ControllerPowerState -int 0 && sudo killall -HUP blued`
}

if (program.status) exec(commands.status)
else if (program.enable) exec(commands.enable)
else if (program.disable) exec(commands.disable)
else program.outputHelp()
