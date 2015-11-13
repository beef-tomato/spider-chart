// 'use strict';

var React       = require('react');
var ReactDOM    = require('react-dom');
var App         = require('./components/App.js');
var rootElement = document.getElementsByClassName('wrapper')[0];

require('../styles/main.js');


console.log('reactDomRender!', rootElement);
ReactDOM.render(
  <App yourObject="geth" />,

  // <App/>,
  rootElement
);
