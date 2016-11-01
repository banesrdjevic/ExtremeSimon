var React = require('react');
var ReactDOM = require('react-dom');
var controls = require('../../Access');
var SimonSays = require('../GameControls/SimonSays');

var styles={
	container:{
		height: "200px"
	},
	squaresLeft:{
		fontSize: "100px",
		textAlign: "center"
	},
	text:{
		fontSize: "50px",
		textAlign: "center"
	}
}
var GameInfoContainer = React.createClass({
	render: function(){
		return (<div style={styles.container}>
				<span style={styles.text}>Squares Left:</span>
				<br />
				<span style={styles.squaresLeft}>{this.props.squaresLeft}</span>
			</div>)
	}
});

module.exports=GameInfoContainer;