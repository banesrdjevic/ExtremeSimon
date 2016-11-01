var React = require('react');
var ReactDOM = require('react-dom');
var SimonSquaresContainer = require('../SimonSquares/SimonSquaresContainer');
var Timer = require('../GameControls/Timer');
var StartButton = require('../GameControls/StartButton');
var GameInfoContainer = require('../GameControls/GameInfoContainer');

var styles = {
	container:{width: "1200px"},
	left:{
		width: "800px",
		textAlign: "center",
		display: "inline-block",
		float: "left"
	},
	right:{
		width: "400px",
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
		if (squaresLeft == 0){squaresLeft = "SUCCESS!"};
		this.state.squaresLeft = squaresLeft;
		this.setState({squaresLeft: squaresLeft});
	},

	saveHighScore: function(){
		var d = new Date();
	    d.setTime(d.getTime() + (100*24*60*60*1000));
    	var expires = "expires="+ d.toUTCString();
		document.cookie = "namescore=NAME---TIME; " + expires + ";path=/"; 
	},

	render: function(){
		return (<div style={styles.container}>
					<div style={styles.left}>
						<Timer	/>
						<SimonSquaresContainer saveHighScore={this.saveHighScore} updateSquaresLeft={this.updateSquaresLeft}/>
						<StartButton />
					</div>
					<div style={styles.right}>
						<GameInfoContainer squaresLeft={this.state.squaresLeft} />
					</div>
			</div>
		)
	}
})

module.exports = GameContainer;