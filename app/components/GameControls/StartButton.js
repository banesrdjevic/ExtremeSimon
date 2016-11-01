var React = require('react');
var ReactDOM = require('react-dom');
var controls = require('../../Access');


var styles ={
	width: "30%",
	cursor:"pointer",
	borderWidth:"0",
	fontSize:"20px",
	fontFamily: "Lato",
	padding:"1.25em 2em",
	color:"#fff",
	backgroundColor:"#272727",
	lineHeight:"1em",
	textTransform: "uppercase",
	letterSpacing:"1px",
	fontWeight: "300",
	textAlign: "center",
	whiteSpace: "nowrap",
	margin:"auto",
	border: "5px solid #272727"
}

var StartButton = React.createClass({
	getInitialState: function(){
		return{
			clicked: false
		};
	},
	changeGameStartState: function(){
		this.state.clicked = true;
		var number = Math.floor((Math.random() * (controls.backgroundColors.length-1)) + 1);
		controls.startTime = new Date();
		controls.started=!controls.started;
		this.setState({clicked: true});
	},

	render: function(){
		if(!this.state.clicked){
			return <button onClick={this.changeGameStartState} style={styles}>Let's Play!</button>
		}
		else{
			styles.backgroundColor = "#fff";
			styles.color= "#272727";
			styles.cursor="default";
			return <div style={styles}>FOR GLORY!</div>
		}
	}
});



module.exports = StartButton;