'use strict';

var outDir = 'mobile/';

module.exports = {
  host: 'localhost',
  port: 3000,

  // app directories
  appDir: 'dev',

  // unit test directories
  unitTestDir: 'dev',

  // build test dir
  buildTestDir: outDir + 'test/',

  // build directories
  buildDir: outDir + 'www/',
  buildCss: outDir + 'www/css/',
  buildFonts: outDir + 'www/fonts/',
  buildImages: outDir + 'www/images/',
  buildJs: outDir + 'www/js/',
  extDir: outDir + 'www/vendor/',
  extCss: outDir + 'www/vendor/css/',
  extFonts: outDir + 'www/vendor/fonts/',
  extJs: outDir + 'www/vendor/js/'
};
