#The Vue cli builds a page that dosent work properly without some workarounds
rm -rf dist
cp docs/index.html index.html
rm -rf docs
yarn build
mv dist docs
cp index.html docs/index.html
rm index.html