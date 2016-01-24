npm run build
cp ./build/*.ejs ../views/build/
cp ./build/*.js ../public/scripts/build
cp ./scripts/libs/three.js/* ../public/scripts/libs/three.js
cp -r ./images/* ../public/images/