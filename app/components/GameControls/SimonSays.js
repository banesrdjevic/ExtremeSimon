var React = require('react');
var ReactDOM = require('react-dom');
var controls = require('../../Access');

var backgroundColors = controls.backgroundColors;

var styles = {
		matcher:{
			background: controls.currentColor,
			height: "534px",
			width: '66%',
			textAlign: 'center',
			marginBottom: '50px',
			verticalAlign: 'middle',
			color: controls.currentColor,
			fontSize: '50px',
			marginBottom: "auto",
			marginTop: "120px"
		},
		container:{
			height: "100%",
			width: "100%"
		}
	};

var SimonSays = React.createClass({
	getInitialState: function(){
		var number = Math.floor((Math.random() * (backgroundColors.length-1)) + 1);
		return{
			color: controls.currentColor
		};
	},

	colorChanger: function(){
		if(!controls.victory && controls.started){
			var number = Math.floor((Math.random() * (backgroundColors.length-1)) + 1);
			var color = backgroundColors[number];
			styles.matcher.background = color;
			this.setState({background: color});
			controls.currentColor = color;
		}
	},

	successText: function(){
		if(controls.victory){
			this.setState({color: "SUCCESS!"});
		}
	},

	interval: null,

	victoryInterval: null,

	componentDidMount: function () {
    	this.interval = setInterval(this.colorChanger, controls.simonSaysTiming);
  		this.victoryInterval = setInterval(this.successText, 50);
  	},

  	componentWillUnmount: function () {
    	clearInterval(this.interval);
  	},

	render: function(){
		var color = this.state.color.toUpperCase();
		return (<div>
					<div style={styles.matcher}></div>
				</div>
			)
	}
})

module.exports = SimonSays;