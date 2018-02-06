yarn
npm run build:clean
npm run build
ROOT=$(pwd)
VERSION=0.2.0
echo -e "pkgname=electron-ssr" >> $ROOT/build/PKGBUILD
echo -e "pkgver=$VERSION" >> $ROOT/build/PKGBUILD
# jq .version $ROOT/package.json >> $ROOT/build/PKGBUILD
cat $ROOT/PKGBUILD >> $ROOT/build/PKGBUILD
cd $ROOT/build/ && tar -xvf electron-ssr-*.pacman
mkdir src pkg
mv $ROOT/build/opt $ROOT/build/src/ 
mv $ROOT/build/usr $ROOT/build/src/
makepkg -i

