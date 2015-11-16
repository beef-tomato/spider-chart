var d3Chart = require('./d3Chart.js');
var React = require('react');
var ReactDOM  = require('react-dom');

var Chart = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      width: 2000,
      height: 2000
    };
  },

  componentDidMount: function() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.create(el, this.props, this.getChartState());
  },

  componentDidUpdate: function() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.update(el, this.getChartState());
  },

  getChartState: function() {
    return {
      data: this.props.data,
      width: this.props.width,
      height: this.props.height
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
