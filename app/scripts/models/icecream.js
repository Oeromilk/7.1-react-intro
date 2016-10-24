var Backbone = require('backbone');

// Backbone Model that represents an icecream flavor
var IceCream = Backbone.Model.extend({
  defaults: {
    upVotes: 0,
    totalVotes: 0
  },
  popularity: function(){
    // This method will be on all models and lets me calculate
    // the icecream flavors popularity as a percent of upVotes over the totalVotes
    return Math.floor(this.get('upVotes') / this.get('totalVotes') * 100);
  }
});

var IceCreamCollection = Backbone.Collection.extend({
  model: IceCream,
  comparator: function(model){
    // Backbone collecitons can have a comparator method that lets
    // backbone sort models in the collection
    return -model.popularity();
  }
});


module.exports = {
  'IceCream': IceCream,
  'IceCreamCollection': IceCreamCollection
};
