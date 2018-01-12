cd ./assets
wget https://raw.githubusercontent.com/ai/autoprefixer-rails/master/vendor/autoprefixer.js
npx uglifyjs autoprefixer.js --output ../assets/autoprefixer.min.js
rm autoprefixer.js

