#!/bin/bash

PKG_NAME=f2gm.tgz

cd "$(dirname "$0")"

cd python
./map.py
cd ../
npm run build

rm -rf $PKG_NAME
tar -zcvf $PKG_NAME index.html dist
scp -i HTTPServer.pem $PKG_NAME ubuntu@f2gm.com:~
