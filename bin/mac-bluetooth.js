const program = require('commander')
const exec = require('../lib/status')

const bluetooth = {
  flags: {
    status: '-s, --status',
    enable: '-e, --enable',
    disable: '-d, --disable'
  },
  cmds: {
    status: `defaults read /Library/Preferences/com.apple.Bluetooth ControllerPowerState | awk '{ if($1 != 0) {print "Bluetooth: ON"} else { print "Bluetooth: OFF" }  }'`,
    enable: `sudo defaults write /Library/Preferences/com.apple.Bluetooth ControllerPowerState -int 1 && sudo killall -HUP blued`,
    disable: `sudo defaults write /Library/Preferences/com.apple.Bluetooth ControllerPowerState -int 0 && sudo killall -HUP blued`
  }
}

for (let f in bluetooth.flags) {
  program.option(bluetooth.flags[f])
}

program.parse(process.argv)

if (program.status) exec(bluetooth.cmds.status)
else if (program.enable) exec(bluetooth.cmds.enable)
else if (program.disable) exec(bluetooth.cmds.disable)
else program.outputHelp()
