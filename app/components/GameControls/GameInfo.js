var React = require('react');
var ReactDOM = require('react-dom');
var controls = require('../../Access');
var SimonSays = require('../GameControls/SimonSays');

var styles={
	container:{
		marginTop: "120px",
		height: "200px",
		border: "1px solid #009688",
		background: "#80CBC4"
	},
	squaresLeft:{
		fontSize: "100px",
		fontFamily: "Roboto, sans-serif",
		color: "white",
		textAlign: "center",
		background: "#80CBC4",
		paddingTop: "auto",
		paddingBottom: "auto"
	},
	text:{
		textAlign: "center", 
		fontFamily:"arial",
		height: "25%",
		width: "100%",
		fontSize: "30px",
		background: "#009688", 
		color: "white", 
		fontFamily:"arial",
		textAlign: "center",
		paddingTop: "auto",
		paddingBottom: "auto"
	},
	vertCent:{
		verticalAlign: "middle"
	}
}
var GameInfoContainer = React.createClass({
	render: function(){
		return (<div style={styles.container}>
				<div style={styles.text}><span style={styles.vertCent}>Squares Left:</span></div>
				<div style={styles.squaresLeft}><span style={styles.vertCent}>{this.props.squaresLeft}</span></div>
			</div>)
	}
});

module.exports=GameInfoContainer;