var React = require('react');
var ReactDOM = require('react-dom');
var SimonSquare = require('./SimonSquare');
var controls = require('../../Access')

var width = 800;
var styles = {
		width: width + 'px'		
	};

var SimonSquaresContainer = React.createClass({
	getInitialState: function () {
    	return { incorrectClick: false};
  	},

	victoryCheck:function(boolean){
		var victory = true;
		var refs = this.refs;
		for(var componentName in refs){
			var ref = refs[componentName]
			if (!ref.state.correct){victory = false};
		}
		if (victory){controls.victory=true};
	},
	render: function(){
		var thisComponent = this;
		// var number = Math.floor(((width/110)*5)) - 1;
		// console.log(number);
		var simonSquares = Array(30).join(".").split(".").map(function(color, i){
			var identifier = 'simon_square_' + i;
			return <SimonSquare victoryCheck={thisComponent.victoryCheck} id={identifier} key={identifier} ref={identifier}/>
		});
		return (<div style={styles}>{simonSquares}</div>)
	}
})

module.exports = SimonSquaresContainer;