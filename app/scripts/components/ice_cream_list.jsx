var _ = require('underscore');
var React = require('react');


var FlavorPopularityInstructions = React.createClass({
  componentWillMount: function(){

    this.showInstructions = false;
  },
  handleClick: function(e){
    e.preventDefault();
    
    this.showInstructions = !this.showInstructions;
    this.forceUpdate();
  },
  render: function(){
    console.warn(this.showInstructions);

    var display;
    if(this.showInstructions){
      display = (
        <p>
          We poll for most popular ice cream flavors!!
          Number of flavors: {this.props.flavors.length}
        </p>
      );
    }

    return (
      <div className="well">
        <button className="btn btn-success" onClick={this.handleClick}>Show Instructions</button>
        {display}
      </div>
    );
  }
});


// class IceCreamFlavorListComponent extend React.Component {
//
// }

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

          <Add num1={1} num2={2} />

          <FlavorPopularityInstructions flavors={this.props.collection}/>

          <ul>
            {listItems}
          </ul>
        </div>
      )
    }
});


function add(number1, number2){
  console.log(arguments);
  console.log(number1 + number2);
}

add(1, 2, 3);

var Add = React.createClass({
    render: function(){
      console.log(this.props.num1 + this.props.num2);
      return <div/>;
    }
});





module.exports = {
  FlavorPopularityInstructions: FlavorPopularityInstructions,
  IceCreamFlavorListComponent: IceCreamFlavorListComponent
};
