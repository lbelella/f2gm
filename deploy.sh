#!/bin/bash

PKG_NAME=f2gm.tgz

rm -rf $PKG_NAME
tar -zcvf $PKG_NAME index.html dist
scp -i HTTPServer.pem $PKG_NAME ubuntu@f2gm.com:~
