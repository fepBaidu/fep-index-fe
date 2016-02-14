npm run build-dev
cp -r ./bower_components/* ../public/scripts/libs/
cp ./build/*.ejs ../views/build/
cp ./build/*.js ../public/scripts/build/
cp ./scripts/libs/three.js/* ../public/scripts/libs/three.js
cp -r ./images/* ../public/images/
cp ./views/common/*.ejs ../views/build/