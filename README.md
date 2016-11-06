# mac.js
The CLI for MacOS written in JavaScript

Inspided by the [m-cli](https://github.com/rgcr/m-cli) project.

**DISCLAIMER** Package is still under heavy development. Features may change without notice.

## Install
`npm install -g mac`

## Demo
![mac demo](./img/mac_demo.gif)

## Usage
- Help
```
$ mac

  Usage: mac [options] [command]


  Commands:

    battery     Battery Info
    bluetooth   Bluetooth Info
    display     Display Info
    firewall    Firewall Info
    help [cmd]  display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

- Battery
```
$ mac battery
  Now drawing from 'AC Power'
  -InternalBattery-0 (id=3997795)        100%; charged; 0:00 remaining present: true
```

- Bluetooth
```
$ mac bluetooth

  Usage: mac-bluetooth [options]

  Options:

    -h, --help     output usage information
    -s, --status
    -e, --enable
    -d, --disable
```
  - Status
  ```
  $ mac bluetooth -s
    Bluetooth: OFF
  ```

- Display
```
$ mac display
Graphics/Displays:

    AMD Radeon R9 M370X:

      ...

    Intel Iris Pro:

      ...
```

- Firewall
```
$ mac firewall
  Usage: mac-firewall [options]

  Options:

    -h, --help     output usage information
    -s, --status   
    -e, --enable   
    -d, --disable  
    -l, --list     
```
  - Status
  ```
  $ mac firewall -s
  Password:
  Firewall is enabled. (State = 1)

  ```