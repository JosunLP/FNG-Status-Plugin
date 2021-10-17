DEPLOY_TARGET=./fng_status_plugin

rm -rf $DEPLOY_TARGET
mkdir -p $DEPLOY_TARGET
cp -rf ./public/popup.html $DEPLOY_TARGET/
cp -rf ./public/datenschutz.html $DEPLOY_TARGET/
cp -rf ./public/manifest.json $DEPLOY_TARGET/
cp -rf ./public/favicon.ico $DEPLOY_TARGET/
cp -rf ./public/icons $DEPLOY_TARGET/
cp -rf ./public/js $DEPLOY_TARGET/
cp -rf ./public/css $DEPLOY_TARGET/


echo "done"