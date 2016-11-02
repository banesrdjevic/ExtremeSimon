var React = require('react');
var ReactDOM = require('react-dom');
var SimonSquaresContainer = require('../SimonSquares/SimonSquaresContainer');
var Timer = require('../GameControls/Timer');
var StartButton = require('../GameControls/StartButton');
var GameInfo = require('../GameControls/GameInfo');
var SimonSays = require('../GameControls/SimonSays');
var HighScore = require('../HighScore/HighScore');
var controls = require('../../Access');


var styles = {
	container:{width: "100%", height: "654px"},
	middle:{
		width: "55%",
		textAlign: "center",
		display: "inline-block",
		float: "right"
	},
	left:{
		width: "20%",
		height: "100%",
		display: "inline-block",
		float: "left"
	},
	right:{
		width: "25%",
		display: "inline-block",
		float: "right"
	}
}

var GameContainer = React.createClass({
	getInitialState: function(){
		return{
			squaresLeft: 30
		};
	},

	updateSquaresLeft: function(change){
		var squaresLeft = this.state.squaresLeft + change;
		if (squaresLeft == 0){squaresLeft = "WIN"};
		this.state.squaresLeft = squaresLeft;
		this.setState({squaresLeft: squaresLeft});
	},

	saveHighScore: function(){
		var currentHighScore = document.cookie.split("=")[1] || "";
		if (currentHighScore == "" || currentHighScore > controls.time){
			var d = new Date();
		    d.setTime(d.getTime() + (100*24*60*60*1000));
	    	var expires = "expires="+ d.toUTCString();
			document.cookie = "highscore="+ controls.time + "; " + expires + ";path=/"; 
		}
	},

	render: function(){
		return (<div style={styles.container}>
					<div style={styles.left}>							
						<GameInfo squaresLeft={this.state.squaresLeft}/>
						<StartButton />
						<HighScore />
					</div>
					<div style={styles.right}>
						<SimonSays />
					</div>
					<div style={styles.middle}>
						<Timer	/>
						<SimonSquaresContainer saveHighScore={this.saveHighScore} updateSquaresLeft={this.updateSquaresLeft}/>
					</div>
			</div>
		)
	}
})

module.exports = GameContainer;