var React = require('react');
var ReactDOM = require('react-dom');
var GameContainer = require('./Containers/GameContainer')
var HighScoreContainer = require('./Containers/HighScoreContainer')

var styles = {
	container:{width: "1800px"},
	highScore:{display: "inline-block", float: "left"},
	game:{height: "1000px", width:"900px", display: "inline-block"}
	}

var App = React.createClass({
	render: function(){
		console.log(styles.highScore);
		return (
			<div style={styles.container}>
				<div style={styles.highScore}>
					<HighScoreContainer />
				</div>
				<div style={styles.game}>
					<GameContainer />
				</div>
			</div>
		)
	}
})

module.exports = App;