var React = require('react');
var ReactDOM = require('react-dom');
var SimonSquaresContainer = require('./SimonSquares/SimonSquaresContainer');
var Timer = require('./GameControls/Timer');
var SimonSays = require('./GameControls/SimonSays');

var App = React.createClass({
	render: function(){
		return (<div>
			<Timer	/>
			<SimonSays />
			<SimonSquaresContainer />
			</div>
		)
	}
})

module.exports = App;