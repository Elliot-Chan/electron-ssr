const builder = require('electron-builder')
const os = require('os')
const path = require('path')

const platform = os.platform()
const Platform = builder.Platform
const YELLOW = '\x1b[33m'
const BLUE = '\x1b[34m'
const END = '\x1b[0m'

let targets
const extraFiles = []

function release (dir) {
    targets = Platform.LINUX.createTarget()
    return builder.build({
    targets: targets,
    x64: true,
    ia32: true,
    dir: dir,
    config: {
      // electronVersion
      // afterPack
      productName: 'ShadowsocksR客户端',
      appId: 'me.erguotou.ssr',
      compression: 'maximum',
      directories: {
        output: 'build'
      },
      files: [
        'dist/electron/**/*',
        '!dist/electron/imgs/ionicons--fonts.svg',
        '!dist/electron/fonts/ionicons--fonts.eot',
        '!dist/electron/fonts/ionicons--fonts.ttf'
      ],
      extraFiles: extraFiles,
      linux: {
        icon: 'build/icons',
        category: 'Development',
        target: [
          'tar.gz'
        ]
      },
      publish: {
        provider: 'github'
      }
    }
  }).then(() => {
    console.log(`${BLUE}Done${END}`)
  }).catch(error => {
    console.error(`${YELLOW}Build error: ${error}${END}`)
  })
}

module.exports = release
