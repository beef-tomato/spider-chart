var d3 = require('d3');

var d3Chart = {};

d3Chart.create = function(el, props, state) {

  var diagonal = d3.svg.diagonal()
      .projection(function(d) { return [d.y, d.x]; });

  var svg = d3.select(el).append("svg")
      .attr('class', 'd3')
      .attr("width", props.width + 300)
      .attr("height", props.height)
      .append("g")
      .attr("transform", "translate(40,0)");
//      .attr('class', 'd3-points');


  var tree = d3.layout.tree()
      .size([props.height, props.width - 160]);

  var json = state.data;

  var nodes = tree.nodes(json);
  nodes.forEach(function(node){
    node.y += 50;
  });
  var links = tree.links(nodes);

      console.log(links);
      console.log(nodes);

  var link = svg.selectAll("path.link")
      .data(links)
      .enter().append("path")
      .attr("class", "link")
      .style("fill", "none")
      .attr("stroke-width", 1)
      .attr("stroke", "black")
      .attr("d", diagonal);


  var node = svg.selectAll("g.node")
      .data(nodes)
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

  node.append("circle")
      .attr("r", 4.5);

  node.append("text")
      .attr("dx", function(d) { return d.children ? -8 : 8; })
      .attr("dy", 3)
      .attr("text-anchor", function(d) { return d.children ? "end" : "start"; })
      .text(function(d) { return d.name; });


  //d3.select(self.frameElement).style("height", height + "px");

  //this.update(el, state);
};

d3Chart.update = function(el, state) {
  // Re-compute the scales, and render the data points
  // var scales = this._scales(el, state.domain);
  // this._drawPoints(el, scales, state.data);
 var svg = d3.select(el)



};

d3Chart.destroy = function(el) {
  // Any clean-up would go here
  // in this example there is nothing to do
};

d3Chart._drawPoints = function(el, scales, data) {
  var g = d3.select(el).selectAll('.d3-points');

  var point = g.selectAll('.d3-point')
    .data(data, function(d) { return d.id; });

  // ENTER
  point.enter().append('circle')
      .attr('class', 'd3-point');

  // ENTER & UPDATE
  point.attr('cx', function(d) { return scales.x(d.x); })
      .attr('cy', function(d) { return scales.y(d.y); })
      .attr('r', function(d) { return scales.z(d.z); });

  // EXIT
  point.exit()
      .remove();
};

d3Chart._scales = function(el, domain) {
  if (!domain) {
    return null;
  }

  var width = el.offsetWidth;
  var height = el.offsetHeight;

  var x = d3.scale.linear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scale.linear()
    .range([height, 0])
    .domain(domain.y);

  var z = d3.scale.linear()
    .range([5, 20])
    .domain([1, 10]);

  return {x: x, y: y, z: z};
};

module.exports = d3Chart;
