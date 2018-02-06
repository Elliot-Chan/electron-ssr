pkgrel=1
pkgdesc="Cross platform ShadowsocksR GUI client built with electron"
url="https://github.com/erguotou520/electron-ssr/"
arch=(x86_64)
license=('MIT')
depends=('c-ares>0', 'ffmpeg>0', 'gtk3>0', 'http-parser>0', 'libevent>0', 'libvpx>0', 'libxslt>0', 'libxss>0', 'minizip>0', 'nss>0', 're2>0', 'snappy>0', 'libnotify>0', 'libappindicator-gtk2>0', 'libappindicator-gtk3>0', 'libappindicator-sharp>0')

package() {
    cp "usr" -r "$pkgdir/"
    cp "opt" -r "$pkgdir/"
}
