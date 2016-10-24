// 3rd Party Imports
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

// Local Imports
var models = require('./models/icecream');
// var views = require('./views/ice_cream_list');
var Instructions = require('./components/ice_cream_list.jsx').FlavorPopularityInstructions;
var ListComponent = require('./components/ice_cream_list.jsx').IceCreamFlavorListComponent;


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    var flavors = this.flavors = new models.IceCreamCollection();

    // ============================================================
    // ============= DEMO HELPERS =================================
    // ============================================================
    // function randomizeVotes(){
    //   flavors.each(function(model){
    //     var numUpVotes = _.random(0, 10);
    //     var numTotalVotes = _.random(numUpVotes, 10);
    //
    //     var newUp = model.get("upVotes") + numUpVotes;
    //     var newTot = model.get("totalVotes") + numTotalVotes;
    //
    //     model.set({'upVotes': newUp, 'totalVotes': newTot});
    //   });
    // }
    //
    // setInterval(randomizeVotes, 3000);
  },
  index: function(){
    // var flavorListView = new views.IceCreamListView({collection: this.flavors});
    // //
    // $('.app').html(flavorListView.render().el);

    ReactDOM.render(
      React.createElement(ListComponent, {collection: this.flavors}),
      document.getElementById('app')
    );

    this.flavors.add([
      {'name': 'Chocolate', upVotes: 10, totalVotes: 25},
      {'name': 'Vinilla', upVotes: 5, totalVotes: 20},
      {'name': 'Peanut Butter', upVotes: 50, totalVotes: 85},
      {'name': 'Strawberry', upVotes: 30, totalVotes: 55}
    ]);
  }
});


var router = new AppRouter();

module.exports = router;
