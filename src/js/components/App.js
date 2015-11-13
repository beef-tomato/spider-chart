var Chart = require('./Chart.js');
var React = require('react');


var sampleData = [
  {id: '5fbmzmtc', x: 7, y: 41, z: 6},
  {id: 's4f8phwm', x: 11, y: 45, z: 9},
  // ...
];

var package1 = {
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
    "children": tree(package1)
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
