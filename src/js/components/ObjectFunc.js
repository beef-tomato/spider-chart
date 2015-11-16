var Chart = require('./Chart.js');
var React = require('react');


var ObjectFunc = React.createClass({

  propTypes: {
    objectJSON: React.PropTypes.object
  },


  getInitialState: function() {
    var object = this.props.objectJSON;

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

    return {
      data: getInitialData(),
      domain: {x: [0, 30], y: [0, 100]}
    };
  },

  render: function() {
    return (
      <div className="App">
        <Chart
          data={this.state.data}/>
      </div>
    );
  }
});

module.exports = ObjectFunc;
