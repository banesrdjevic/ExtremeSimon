var React = require('react');
var ReactDOM = require('react-dom');
var GameContainer = require('./Containers/GameContainer')
var HighScoreContainer = require('./Containers/HighScoreContainer')

var styles = {
	container:{width: "1400px", marginLeft: "auto", marginRight: "auto"},
	highScore:{display: "inline-block", float: "left"},
	game:{}
	}

var App = React.createClass({
	render: function(){
				// <div style={styles.highScore}>
				// 	<HighScoreContainer />
				// </div>
		return (
			<div style={styles.container}>
				<div style={styles.game}>
					<GameContainer />
				</div>
			</div>
		)
	}
})

module.exports = App;