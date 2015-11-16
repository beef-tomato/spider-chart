// 'use strict';

var React       = require('react');
var ReactDOM    = require('react-dom');
var App         = require('./components/App.js');
var rootElement = document.body;


console.log('reactDomRender!', rootElement);
ReactDOM.render(

  <App/>,
  rootElement
);
