
// 3rd Party Imports
var $ = require('jquery');
var Backbone = require('backbone');

// Local Imports
require('./router');

// DOM Ready
$(function(){
  Backbone.history.start();
});

// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var Heading = React.createClass({
//   render: function(){
//     return (
//       <h1>
//         Hello React!
//       </h1>
//     );
//   }
// });
//
// ReactDOM.render(
//   React.createElement(Heading),
//   document.getElementById('app')
// );
