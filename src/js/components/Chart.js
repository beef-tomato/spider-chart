var d3Chart = require('./d3Chart.js');
var React = require('react');
var ReactDOM  = require('react-dom');

var Chart = React.createClass({
  propTypes: {
    data: React.PropTypes.object,
    domain: React.PropTypes.object
  },

  componentDidMount: function() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.create(el, {
      width: 660,
      height: 1000
    }, this.getChartState());
  },

  componentDidUpdate: function() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.update(el, this.getChartState());
  },

  getChartState: function() {
    return {
      data: this.props.data,
      domain: this.props.domain
    };
  },

  componentWillUnmount: function() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.destroy(el);
  },

  render: function() {
    return (
      <div className="Chart"></div>
    );
  }
});

module.exports = Chart;
