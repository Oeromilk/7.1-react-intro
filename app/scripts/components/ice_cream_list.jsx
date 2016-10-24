var _ = require('underscore');
var React = require('react');


var FlavorPopularityInstructions = React.createClass({
  render: function(){
    return (
      <div className="well">
        We poll for most popular ice cream flavors!! Number of flavors: {this.props.flavors.length}
      </div>
    );
  }
});

var IceCreamFlavorListComponent = React.createClass({
    componentDidMount: function(){
      var self = this;

      setInterval(function(){self.randomizeVotes()}, 3000);
    },
    randomizeVotes: function(){
      this.props.collection.each(function(model){
        var numUpVotes = _.random(0, 10);
        var numTotalVotes = _.random(numUpVotes, 10);

        var newUp = model.get("upVotes") + numUpVotes;
        var newTot = model.get("totalVotes") + numTotalVotes;

        model.set({'upVotes': newUp, 'totalVotes': newTot});
      });

      // Special React Component Method to signal an update happened.
      this.forceUpdate();
    },
    render: function(){
      // Sort the collections
      this.props.collection.sort();

      var listItems = this.props.collection.map(function(flavor){
        return (
          <li key={flavor.cid}>
            {flavor.get('name')} :: {flavor.popularity()}
          </li>
        );
      });

      return (
        <div>
          <h1>Flavor Flav!</h1>

          <FlavorPopularityInstructions flavors={this.props.collection}/>

          <ul>
            {listItems}
          </ul>
        </div>
      )
    }
});



module.exports = {
  FlavorPopularityInstructions: FlavorPopularityInstructions,
  IceCreamFlavorListComponent: IceCreamFlavorListComponent
};
