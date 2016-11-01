var React = require('react');
var ReactDOM = require('react-dom');
var SimonSays = require('../GameControls/SimonSays');
var GameInfo = require('../GameControls/GameInfo');


var styles = {
}

var GameInfoContainer = React.createClass({
	render: function(){
		return (<div style={styles}>
				<GameInfo squaresLeft={this.props.squaresLeft}/>
				<SimonSays />
			</div>)
	}
});

module.exports=GameInfoContainer;