var React = require('react');
var ObjectFunc = require('./ObjectFunc.js');

var objectJSON = {
  "name": "webpack",
  "version": "1.12.4",
  "author": {
    "name": "Tobias Koppers @sokra"
  },
  "description": "Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jade, coffee, css, less, ... and your custom stuff.",
  "dependencies": {
    "async": "^1.3.0",
    "clone": "^1.0.2",
    "enhanced-resolve": "~0.9.0",
    "esprima": "^2.5.0",
    "interpret": "^0.6.4",
    "loader-utils": "^0.2.11",
    "memory-fs": "~0.2.0",
    "mkdirp": "~0.5.0",
    "node-libs-browser": ">= 0.4.0 <=0.6.0",
    "optimist": "~0.6.0",
    "supports-color": "^3.1.0",
    "tapable": "~0.1.8",
    "uglify-js": "~2.5.0",
    "watchpack": "^0.2.1",
    "webpack-core": "~0.6.0"
  },
  "license": "MIT",
  "devDependencies": {
    "benchmark": "^1.0.0",
    "bundle-loader": "~0.5.0",
    "codecov.io": "^0.1.2",
    "coffee-loader": "~0.7.1",
    "coffee-script": "^1.10.0",
    "component-webpack-plugin": "~0.2.0",
    "coveralls": "^2.11.2",
    "css-loader": "~0.15.0",
    "diff": "^2.0.2",
    "eslint": "^1.1.0",
    "eslint-plugin-nodeca": "^1.0.3",
    "express": "~4.13.1",
    "extract-text-webpack-plugin": "~0.8.0",
    "file-loader": "~0.8.0",
    "glob": "^5.0.14",
    "i18n-webpack-plugin": "~0.2.0",
    "istanbul": "^0.3.13",
    "jade": "^1.11.0",
    "jade-loader": "~0.7.0",
    "js-beautify": "^1.5.10",
    "json-loader": "~0.5.1",
    "less": "^2.5.1",
    "less-loader": "^2.0.0",
    "mocha": "~2.2.0",
    "mocha-lcov-reporter": "0.0.2",
    "raw-loader": "~0.5.0",
    "script-loader": "~0.6.0",
    "should": "^7.0.2",
    "style-loader": "~0.12.0",
    "url-loader": "~0.5.0",
    "val-loader": "~0.5.0",
    "vm-browserify": "~0.0.0",
    "webpack-dev-middleware": "^1.0.0",
    "worker-loader": "~0.6.0"
  },
  "engines": {
    "node": ">=0.6"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/webpack/webpack.git"
  },
  "homepage": "https://github.com/webpack/webpack",
  "main": "lib/webpack.js",
  "web": "lib/webpack.web.js",
  "bin": {
    "webpack": "./bin/webpack.js"
  },
  "files": [
    "lib/",
    "bin/",
    "buildin/",
    "hot/",
    "web_modules/"
  ],
  "scripts": {
    "pretest": "npm run lint && npm run beautify-lint",
    "test": "mocha",
    "travis": "npm run cover -- --report lcovonly",
    "lint": "eslint lib bin hot scripts",
    "beautify-lint": "node ./scripts/beautify-check",
    "beautify": "node ./scripts/beautify-rewrite",
    "precover": "npm run lint && npm run beautify-lint",
    "cover": "istanbul cover -x *.runtime.js node_modules/mocha/bin/_mocha",
    "publish-patch": "mocha && npm version patch && git push && git push --tags && npm publish"
  },
  "gitHead": "530f669e13770ccf5082f29dbde1b114e6173a07",
  "bugs": {
    "url": "https://github.com/webpack/webpack/issues"
  },
  "_id": "webpack@1.12.4",
  "_shasum": "711fcab8e815bb7971162dd5d4ce9f75917d4669",
  "_from": "webpack@>=1.12.2 <2.0.0",
  "_npmVersion": "2.10.1",
  "_nodeVersion": "0.12.4",
  "_npmUser": {
    "name": "sokra",
    "email": "tobias.koppers@googlemail.com"
  },
  "maintainers": [
    {
      "name": "sokra",
      "email": "tobias.koppers@googlemail.com"
    }
  ],
  "dist": {
    "shasum": "711fcab8e815bb7971162dd5d4ce9f75917d4669",
    "tarball": "http://registry.npmjs.org/webpack/-/webpack-1.12.4.tgz"
  },
  "directories": {},
  "_resolved": "https://registry.npmjs.org/webpack/-/webpack-1.12.4.tgz",
  "readme": "ERROR: No README data found!"
};




var App = React.createClass({

  render: function() {
    return (
      <div className="App">
        <ObjectFunc
          objectJSON={objectJSON}
        />
      </div>
    );
  }
});

module.exports = App;
