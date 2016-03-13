'use strict';

var outDir = 'El_Deportivo_Server/';

module.exports = {
  host: 'localhost',
  port: 3000,

  // app directories
  appDir: 'dev',

  // unit test directories
  unitTestDir: 'app',

  // build test dir
  buildTestDir: outDir + 'test/',

  // build directories
  buildDir: outDir + 'assets/',
  buildCss: outDir + 'assets/css/',
  buildFonts: outDir + 'assets/fonts/',
  buildImages: outDir + 'assets/images/',
  buildJs: outDir + 'assets/js/',
  extDir: outDir + 'assets/vendor/',
  extCss: outDir + 'assets/vendor/css/',
  extFonts: outDir + 'assets/vendor/fonts/',
  extJs: outDir + 'assets/vendor/js/'
};
