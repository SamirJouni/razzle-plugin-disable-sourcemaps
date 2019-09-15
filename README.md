[![npm version](https://badge.fury.io/js/razzle-plugin-disable-sourcemaps.svg)](https://badge.fury.io/js/razzle-plugin-disable-sourcemaps)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/SamirJouni)

# razzle-plugin-disable-sourcemaps

A razzle plugin that disables source maps for both css and js

**How To Use:**
```
npm i --save-dev razzle-plugin-disable-sourcemaps
```
then,
create a razzle.config.js at the root directory of your razzle project. Then paste this in the file.

```
// razzle.config.js

module.exports = {
  plugins: ['disable-sourcemaps'],
};
```
