var React = require('react');
var ObjectFunc = require('./ObjectFunc.js');

var objectJSON = {
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
