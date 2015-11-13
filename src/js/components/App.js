var Chart = require('./Chart.js');
var React = require('react');

var object = {
  name: "jsonedit",
  version: "1.0.0",
  description: "",
  main: "index.js",
  scripts: {
    test1: "echo \"Error: no test specified\" && exit 1",
    lint: "do some linting"
  },
  author: "",
  license: "ISC"
};

var getInitialData = function() {

  var tree = function(object) {
    return Object.keys(object).map(function(key) {
      return {
        "name": key,
        "children": typeof object[key] === 'string' ?
          [{ "name": object[key] }] : tree(object[key])
      };
    });
  }

  return {
    "name": "package1",
    "children": tree(object)
  };
}

var App = React.createClass({
  getInitialState: function() {
    return {
      data: getInitialData(),
      domain: {x: [0, 30], y: [0, 100]}
    };
  },

  render: function() {
    return (
      <div className="App">
        <Chart
          data={this.state.data}
          domain={this.state.domain} />
      </div>
    );
  }
});

module.exports = App;
// React.renderComponent(App(), document.body);
